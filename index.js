const express = require('express');
const PDFDocument = require('pdfkit');
const { buscarDadosDeVendas } = require('./src/vendasRepository');

const app = express();
app.use(express.json());

app.get('/relatorios/vendas', async (req, res) => {
  const dados = await buscarDadosDeVendas(req.query.periodo || '2026-Q1');
  res.json(dados);
});

app.post('/exportar-pdf', async (req, res) => {
  const dados = await buscarDadosDeVendas(req.body.periodo || '2026-Q1');

  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  doc.pipe(res);

  doc.fontSize(18).text(`Relatorio de Vendas - ${dados.periodo}`, { align: 'center' });
  doc.moveDown();

  dados.vendasMensais.forEach((linha) => {
    doc.fontSize(12).text(`${linha.mes}: R$ ${linha.total.toFixed(2)} (${linha.pedidos} pedidos)`);
  });

  doc.end();
});

app.listen(3000, () => console.log('relatorio-de-vendas na porta 3000'));
