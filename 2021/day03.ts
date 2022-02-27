import { FileLoader } from '../services/fileLoader';

// Result 1
let fl: FileLoader = new FileLoader();
let testInput: number[][] = fl
  .load(`${__dirname}/day03.txt`)
  .map((x: string) => {
    const arr = x
      .split('')
      .map((y) => {
        const current = parseInt(y, 10);
        return current;
      })
      .filter((x) => {
        return !isNaN(x);
      });
    return arr;
  });

let mostCommonBits: number[] = [],
  leastCommonBits: number[] = [];

for (let x = 0; x < testInput[0].length; x++) {
  let countZero = 0;
  let countOne = 0;
  for (let y = 0; y < testInput.length; y++) {
    const current = testInput[y][x];
    if (current === 0) countZero++;
    if (current === 1) countOne++;
  }
  if (countZero > countOne) {
    mostCommonBits.push(0);
    leastCommonBits.push(1);
  } else if (countOne > countZero) {
    mostCommonBits.push(1);
    leastCommonBits.push(0);
  }
}

const bitLength = mostCommonBits.length;
let gamma = 0,
  epsilon = 0;
mostCommonBits.forEach((x, index) => {
  const current = Math.pow(2, bitLength - index - 1) * x;
  gamma += current;
});
leastCommonBits.forEach((x, index) => {
  const current = Math.pow(2, bitLength - index - 1) * x;
  epsilon += current;
});

console.log('Result 1: ' + gamma * epsilon);

// Result 2
let bitPosition = 0,
  zeroes: number[][] = [],
  ones: number[][] = [];

let resultingLines: number[] = [];
getSomething(testInput, true);
let oxygenGeneratorRating = convertToBinary(resultingLines);
console.log(oxygenGeneratorRating);

resultingLines = [];
bitPosition = 0;
getSomething(testInput, false);
let co2ScrubberRating = convertToBinary(resultingLines);
console.log(co2ScrubberRating);

// Functions
function getSomething(remainingLines: number[][], findMore: boolean) {
  remainingLines.forEach((line) => {
    line[bitPosition] === 0 ? zeroes.push(line) : ones.push(line);
  });
  if (zeroes.length > ones.length) {
    remainingLines = findMore ? zeroes : ones;
  } else if (zeroes.length <= ones.length) {
    remainingLines = findMore ? ones : zeroes;
  }
  bitPosition++;
  zeroes = [];
  ones = [];
  if (bitPosition === testInput[0].length + 1) {
    resultingLines = remainingLines[0];
    return;
  }
  getSomething(remainingLines, findMore);
}

function convertToBinary(lines: number[]) {
  let result = 0;
  lines.forEach((x, index) => {
    const current = Math.pow(2, lines.length - index - 1) * x;
    result += current;
  });
  return result;
}
