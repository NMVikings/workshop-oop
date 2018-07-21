import fs from 'fs';

export default class FileReader {
  constructor(format) {
    this.format = format;
  }

  read = pathToFile => fs.readFile(pathToFile, this.format);
}
