const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
    // 设置CORS头部
  res.setHeader('Access-Control-Allow-Origin', 'https://chriswangca.github.io/'); // 或者指定你的前端域名
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const { name, email, message } = req.body;
    await contactEmail.sendMail({
      from: name,
      to: "chriswangtemp@gmail.com",
      subject: "Contact from my portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
};
