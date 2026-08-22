// Fonte de dados consolidada de vendas.
// O shape retornado eh { periodo, vendasMensais: [...] }.
async function buscarDadosDeVendas(periodo) {
  return {
    periodo,
    vendasMensais: [
      { mes: 'Janeiro',   total: 154300.55, pedidos: 412 },
      { mes: 'Fevereiro', total: 138920.10, pedidos: 377 },
      { mes: 'Marco',     total: 201455.80, pedidos: 508 },
    ],
  };
}

module.exports = { buscarDadosDeVendas };
