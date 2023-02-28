const numeroUsuario = parseInt(prompt("Digite um número: "));

let fib = [0, 1];

while (fib[fib.length - 1] < numeroUsuario) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
}

if (fib.includes(numeroUsuario)) {
  console.log(`${numeroUsuario} pertence à sequência de Fibonacci até ${fib[fib.length - 1]}.`);
} else {
  console.log(`${numeroUsuario} não pertence à sequência de Fibonacci até ${fib[fib.length - 1]}.`);
}
