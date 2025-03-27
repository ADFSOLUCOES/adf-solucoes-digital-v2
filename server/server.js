require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Configuração do transporter do nodemailer usando Resend
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  port: 465,
  secure: true,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY
  }
});

// Verificar conexão com o servidor de email
transporter.verify((error, success) => {
  if (error) {
    console.error("Erro na verificação do servidor de email:", error);
  } else {
    console.log("Servidor de email pronto!");
  }
});

// Rota para testar o servidor
app.get('/api/test', (req, res) => {
  res.json({ message: 'Servidor funcionando!' });
});

// Rota para enviar email
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Novo contato de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">Novo contato recebido</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #0066cc;">Nome:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #0066cc;">Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong style="color: #0066cc;">Telefone:</strong> ${phone}</p>
            ${company ? `<p style="margin: 10px 0;"><strong style="color: #0066cc;">Empresa:</strong> ${company}</p>` : ''}
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Este email foi enviado através do formulário de contato do site.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true,
      message: 'Email enviado com sucesso!' 
    });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erro ao enviar email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Rota de verificação de saúde
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 