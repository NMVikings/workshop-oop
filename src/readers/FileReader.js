import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export default class FileReader {
  read = source => readFile(source, 'utf-8');
}
