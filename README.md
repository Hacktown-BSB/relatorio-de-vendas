# relatorio-de-vendas

Servico responsavel pela geracao e **exportacao de relatorios de vendas**.

## Funcionalidades

- Consolidacao de vendas por periodo
- Exportacao de relatorios em **PDF**
- Exportacao em CSV

## Endpoints

| Metodo | Rota | Descricao |
|---|---|---|
| GET | `/relatorios/vendas` | Retorna os dados consolidados de vendas |
| POST | `/exportar-pdf` | Gera e retorna o relatorio de vendas em PDF |

## Stack

Node.js + Express + PDFKit.
