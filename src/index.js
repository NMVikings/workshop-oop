import Atom from './renders/Atom';
import Parser from './Parser';
import getReader from './readers';

export default class Converter {
  convert = async (source) => {
    const file = await getReader(source).read();

    //parse xml
    const { type, ...ast } = new Parser().parse(file);

    //renderAtom
    const res = new Atom().render(ast);

    return res;
  }
}
