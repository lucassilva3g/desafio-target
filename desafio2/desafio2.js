let num = parseInt(prompt("Digite um número:"));

let fib1 = 0, fib2 = 1, nextFib;

while (fib1 <= 100) {
  console.log(fib1);
  nextFib = fib1 + fib2;
  fib1 = fib2;
  fib2 = nextFib;
}

if (fibonacci(num)) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}

function fibonacci(n) {
  let fib1 = 0, fib2 = 1, nextFib;

  while (fib1 <= n) {
    if (fib1 === n) {
      return true;
    }
    nextFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextFib;
  }

  return false;
}
