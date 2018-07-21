import fs from 'fs';

export default class Reader {
  constructor(format) {
    this.format = format;
  }

  read = pathToFile => fs.readFileSync(pathToFile, this.format);
}
