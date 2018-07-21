import fs from 'fs';

export default class FileReader {
  constructor(source) {
    this.source = source;
  }

  read = () => fs.readFile(this.source, 'utf-8');
}
