const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('dados.json'));

let menorFaturamento = Infinity;
let maiorFaturamento = -Infinity;

let somaFaturamento = 0;
let diasComFaturamento = 0;

dados.forEach((dia) => {
  const valor = dia.valor;

  if (valor < menorFaturamento) {
    menorFaturamento = valor;
  }

  if (valor > maiorFaturamento) {
    maiorFaturamento = valor;
  }

  if (valor > 0) {
    somaFaturamento += valor;
    diasComFaturamento += 1;
  }
});

const mediaMensal = somaFaturamento / diasComFaturamento;

let diasAcimaMedia = 0;

dados.forEach((dia) => {
  if (dia.valor > mediaMensal) {
    diasAcimaMedia += 1;
  }
});

console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
