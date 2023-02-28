const faturamentoPorEstado = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

const valorTotal = Object.values(faturamentoPorEstado).reduce((total, faturamento) => total + faturamento, 0);

const percentuaisPorEstado = {};

for (const estado in faturamentoPorEstado) {
  const faturamento = faturamentoPorEstado[estado];
  const percentual = (faturamento / valorTotal) * 100;
  percentuaisPorEstado[estado] = percentual.toFixed(2) + '%';
}

console.log(percentuaisPorEstado);
