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
console.log(result);
