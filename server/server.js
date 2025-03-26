require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Origem do seu frontend
  credentials: true
}));
app.use(express.json());

// Configuração do transporter do nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true, // Ativa logs detalhados
  logger: true // Ativa logger
});

// Verificar conexão com o servidor de email
transporter.verify((error, success) => {
  if (error) {
    console.error("Erro na verificação do servidor de email:", error);
  } else {
    console.log("Servidor de email pronto!");
    // Mostrar as configurações (sem senha)
    console.log("Configurações do email:", {
      user: process.env.EMAIL_USER,
      service: 'gmail'
    });
  }
});

// Rota para testar o servidor
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Servidor funcionando!',
    emailConfig: {
      user: process.env.EMAIL_USER,
      service: 'gmail'
    }
  });
});

// Rota para enviar email
app.post('/api/send-email', async (req, res) => {
  console.log("Recebendo requisição de email:", {
    body: req.body,
    headers: req.headers
  });

  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Por favor, preencha todos os campos obrigatórios' 
    });
  }

  try {
    console.log("Tentando enviar email...");
    
    const mailOptions = {
      from: `"ADF Soluções Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Novo contato de ${name} - ADF Soluções`,
      html: `
        <h2>Novo contato do website</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    };

    console.log("Opções do email:", mailOptions);

    const info = await transporter.sendMail(mailOptions);

    console.log('Email enviado com sucesso:', info);
    res.json({ 
      success: true,
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Erro detalhado ao enviar email:', {
      error: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });
    
    res.status(500).json({ 
      success: false, 
      error: `Erro ao enviar mensagem: ${error.message}`,
      details: {
        code: error.code,
        command: error.command
      }
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 