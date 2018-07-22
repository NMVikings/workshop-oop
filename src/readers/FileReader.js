import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export default class FileReader {
  constructor(source) {
    this.source = source;
  }

  read = () => readFile(this.source, 'utf-8');
}
