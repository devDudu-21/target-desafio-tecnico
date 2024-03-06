# [Desafio 2](index.js)

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

```javascript
function isFibonnaci(number) {
  let a = 0,
    b = 1,
    temp;
  while (b <= number) {
    if (b === number)
      return `O número ${number} pertence à sequência de Fibonacci.`;
    temp = b;
    b += a;
    a = temp;
  }
  return `O número ${number} não pertence à sequência de Fibonacci.`;
}

const INPUT_NUMBER = 89;

let result = isFibonnaci(INPUT_NUMBER);
console.log(result); // Output: `O número 89 pertence à sequência de Fibonacci.`
```
