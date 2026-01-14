require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

// Configuração CORS para produção
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://adfsolucoesdigital.com.br', 'https://www.adfsolucoesdigital.com.br']
    : true, // Em desenvolvimento, permite qualquer origem
  credentials: true
};

// Middleware
app.use(cors(corsOptions));

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

    // Validação básica dos dados
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    const mailOptions = {
      from: 'comercial@adfsolucoes.com',
      to: 'contato@adfsolucoesdigital.com.br',
      subject: `Contato via Site - ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Empresa: ${company || 'Não informado'}
        
        Mensagem:
        ${message}
      `,
      html: `
        <h2>Novo contato via site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br>')}</p>
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
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
}); 