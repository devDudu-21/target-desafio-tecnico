function invertString(string) {
  let invertedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString;
}

const string = "Target Sistemas";
const result = invertString(string);
console.log(`String invertida: ${result}`);
