import { FileLoader } from '../services/fileLoader';

// const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let fl: FileLoader = new FileLoader();
let testInput: number[] = fl.load(`${__dirname}/day01.txt`).map((x: string) => {
  return parseInt(x, 10);
});

let increasements = 0;
let lastNumber: number;

// Result 1
testInput.forEach((currentNumber, index) => {
  if (index === 0) {
    lastNumber = currentNumber;
    return;
  }

  if (currentNumber > lastNumber) {
    increasements++;
  }
  lastNumber = currentNumber;
});

console.log('Result 1: ' + increasements);

// Result 2
increasements = 0;
for (let i = 0; i < testInput.length - 2; i++) {
  let sum1 = testInput[i] + testInput[i + 1] + testInput[i + 2];
  let sum2 = testInput[i + 1] + testInput[i + 2] + testInput[i + 3];

  if (sum2 > sum1) increasements++;
}
console.log('Result 2: ' + increasements);
