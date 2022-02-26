import { FileLoader } from '../services/fileLoader';

// const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let fl: FileLoader = new FileLoader();
let testInput: number[][] = fl
  .load(`${__dirname}/day03.txt`)
  .map((x: string) => {
    const arr = x.split('').map((y) => {
      return parseInt(y, 10);
    });
    return arr;
  });

let mostCommonBits: number[] = [];
let leastCommonBits: number[] = [];

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
