import { FileLoader } from '../services/fileLoader';

// const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let fl: FileLoader = new FileLoader();
let testInput: number[] = fl.load(`${__dirname}/input.txt`);

let increasements = 0;
let lastNumber: number;

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

console.log(increasements);
