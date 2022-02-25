import { readFileSync } from 'fs';

let testInput: number[];
export class FileLoader {
  testInput: any;

  constructor() {}

  load(path: string): any {
    let contents = readFileSync(path, 'utf8')
      .split('\n')
      .map((x) => {
        return parseInt(x, 10);
      });

    return contents;
  }
}
