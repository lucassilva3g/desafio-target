// Distância entre Ribeirão Preto e Franca (em km)
const distanciaTotal = 100;

// Velocidade constante do carro (em km/h)
const velocidadeCarro = 110;

// Velocidade constante do caminhão (em km/h)
const velocidadeCaminhao = 80;

// Tempo que o caminhão leva a mais para passar em cada pedágio (em minutos)
const tempoPedagio = 5;

// Converter o tempo do pedágio para horas
const tempoPedagioEmHoras = tempoPedagio / 60;

// Calcular o tempo de viagem do carro até o encontro com o caminhão
const tempoCarro = distanciaTotal / velocidadeCarro;

// Calcular o tempo de viagem do caminhão até o encontro com o carro
const tempoCaminhao = (distanciaTotal / velocidadeCaminhao) + (2 * tempoPedagioEmHoras);

// Multiplicar a velocidade pela duração da viagem para obter a distância percorrida por cada veículo
const distanciaPercorridaCarro = velocidadeCarro * tempoCarro;
const distanciaPercorridaCaminhao = velocidadeCaminhao * tempoCaminhao;

// Verificar qual veículo está mais próximo de Ribeirão Preto
if (distanciaPercorridaCarro === distanciaTotal) {
  console.log('O carro está mais próximo de Ribeirão Preto.');
} else {
  console.log('O caminhão está mais próximo de Franca.');
}
