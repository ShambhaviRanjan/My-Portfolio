require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;
const recipientEmail = process.env.EMAIL_TO || "shambhaviranjan088@gmail.com";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:3000"],
        credentials: true,
    })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
    res.status(200).json({ success: true, message: "Backend is live." });
});

app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "Please complete all fields before sending the message.",
        });
    }

    const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 12px;">New portfolio contact message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

    try {
        if (resend) {
            await resend.emails.send({
                from: process.env.EMAIL_FROM || "onboarding@resend.dev",
                to: recipientEmail,
                replyTo: email,
                subject: `[Portfolio Contact] ${subject}`,
                html,
            });
        } else if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT || 587),
                secure: Number(process.env.SMTP_PORT || 587) === 465,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.EMAIL_FROM || process.env.SMTP_USER,
                to: recipientEmail,
                replyTo: email,
                subject: `[Portfolio Contact] ${subject}`,
                html,
            });
        } else {
            console.log("Portfolio contact message saved to backend log:", {
                name,
                email,
                subject,
                message,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Your message was sent successfully.",
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return res.status(500).json({
            success: false,
            message: "There was an issue sending your message. Please email directly at shambhaviranjan088@gmail.com.",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
