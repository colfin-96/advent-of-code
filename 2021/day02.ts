import { FileLoader } from '../services/fileLoader';

let fl: FileLoader = new FileLoader();
let testInput: string[] = fl.load(`${__dirname}/day02.txt`);

let hPos = 0;
let depth = 0;

// Result 01
testInput.forEach((x) => {
  const direction = x.split(' ')[0];
  const amount = parseInt(x.split(' ')[1], 10);

  switch (direction) {
    case 'forward': {
      hPos += amount;
      break;
    }
    case 'down': {
      depth += amount;
      break;
    }
    case 'up':
    default: {
      depth -= amount;
      break;
    }
  }
});

console.log('Result 1: ' + hPos * depth);
