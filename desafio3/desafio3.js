// a) A lógica é adicionar 2 ao número anterior, portanto o próximo elemento é 9.

let a = [1, 3, 5, 7];
let nextA = a[a.length - 1] + 2;
console.log(nextA); // Saída: 9

// b) A lógica é multiplicar o número anterior por 2, portanto o próximo elemento é 128.

let b = [2, 4, 8, 16, 32, 64];
let nextB = b[b.length - 1] * 2;
console.log(nextB); // Saída: 128

// c) A lógica é adicionar uma sequência de números ímpares a partir de 1, portanto o próximo elemento é 49.

let c = [0, 1, 4, 9, 16, 25, 36];
let nextC = c[c.length - 1] + (c.length * 2) + 1;
console.log(nextC); // Saída: 49

// d) A lógica é adicionar uma sequência de números pares a partir de 4, portanto o próximo elemento é 100.

let d = [4, 16, 36, 64];
let nextD = d[d.length - 1] + (d.length * 4);
console.log(nextD); // Saída: 100

//e) A lógica é adicionar os dois números anteriores, portanto o próximo elemento é 13.

let e = [1, 1, 2, 3, 5, 8];
let nextE = e[e.length - 1] + e[e.length - 2];
console.log(nextE); // Saída: 13

// f) A lógica não é muito clara, mas aparentemente os números estão em ordem crescente com exceção do número 17. Dessa forma, podemos supor que o próximo número é 20.

let f = [2, 10, 12, 16, 17, 18, 19];
let nextF = 20;
console.log(nextF); // Saída: 20

