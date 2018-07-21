import Atom from './renders/Atom';
import Parser from './Parser';
import FileReader from './readers/FileReader';
import HttpReader from './readers/HttpReader';

export default class Converter {
  convert = async (pathToFile) => {
    const Reader = pathToFile.startsWith('http') ? HttpReader : FileReader;

    // console.log(Reader, pathToFile)
    const file = await this.readFile(new Reader('utf-8'), pathToFile);

    //parse xml
    const { type, ...ast } = new Parser().parse(file);


    //renderAtom
    const res = new Atom().render(ast);

    return res;
  }

  readFile = async (Reader, pathToFile) => Reader.read(pathToFile);
}
