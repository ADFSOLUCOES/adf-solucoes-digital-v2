require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Configuração do email usando servidor SMTP da Hostgator
const transporter = nodemailer.createTransport({
  host: 'smtp.adfsolucoes.com', // ou smtp.hostgator.com
  port: 587,
  secure: false,
  auth: {
    user: 'comercial@adfsolucoes.com',
    pass: process.env.EMAIL_PASS
  }
});

// Rota para enviar email
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    const mailOptions = {
      from: 'comercial@adfsolucoes.com',
      to: 'comercial@adfsolucoes.com',
      subject: `Contato via Site - ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Empresa: ${company || 'Não informado'}
        
        Mensagem:
        ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 