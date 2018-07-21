import Atom from './renders/Atom';
import Parser from './Parser';
import Reader from './Reader';

export default class Converter {
  convert(pathToFile) {
    //read file
    const file = new Reader('utf-8').read(pathToFile);

    //parse xml
    const { type, ...ast } = new Parser().parse(file);


    //renderAtom
    const res = new Atom().render(ast);

    return res;
  }
}
