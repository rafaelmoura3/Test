const input = document.querySelector("input");
const output = document.querySelector(".output");
const button = document.querySelector(".button");
const button1 = document.querySelector(".button1");

button.addEventListener("click", () => {
  let userNum = parseInt(input.value);
  let Roman = toRoman(userNum);
  if (input.value == "" || isNaN(input.value)) {
    output.innerText = "Entrada Invalida"
  } else {
    output.innerText = Roman;
  }
  input.value = "";
});

button1.addEventListener("click", () => {
  let userNum = (input.value);
  let numeral = fromRoman(userNum);

  if (input.value = !String) {
    output.innerText = "Entrada Invalida"
  } else {
    output.innerText = numeral;
  }
  input.value = "";
});



function fromRoman(inputValue = "") {
  if (typeof inputValue !== "string") throw new TypeError("nao e um texto");
  if (inputValue.length < 1) throw new Error('texto vazio invalido');
  inputValue = inputValue.toUpperCase();
  if (inputValue.search(/[^MDCLXVID]/g) != -1) throw new Error('texto invalido');
  const map = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900, I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let finalValue = 0;
  for (let i = 0; i < inputValue.length; i++) {
    const twoLetter = map[inputValue[i] + inputValue[i + 1]];
    const oneLetter = map[inputValue[i]];
    if (twoLetter != null) {
      finalValue += twoLetter; i++;
    }
    else if (oneLetter != null) finalValue += oneLetter;
    if (finalValue > 3999) throw new RangeError("nao escreva um numero maior que 3999");
  }
  return finalValue;
};

function toRoman(inputValue) {
  if (inputValue === 0) return ("impossivel representar 0");
  if (typeof inputValue !== "number") throw new TypeError("nao é numero");
  if (inputValue % 1 !== 0) throw new RangeError("nao é numero");
  if (inputValue < 0) throw new RangeError("nnao é numero");
  if (inputValue > 3999) return "nao escreva um numero maior que 3999"
  const romanNumeralValueMap = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let romanNumeral = '';
  while (inputValue > 0) {
    for (const letter in romanNumeralValueMap) {
      if (romanNumeralValueMap[letter] <= inputValue) {
        romanNumeral += letter;
        inputValue -= romanNumeralValueMap[letter];
        break;
      }
    }
  }
  return romanNumeral;
}


