import getRender from './renders';
import Parser from './Parser';
import getReader from './readers';

export default class Converter {
  convert = async (source, format = 'atom') => {
    const file = await getReader(source).read();

    //parse xml
    const { type, ...ast } = new Parser().parse(file);

    //renderAtom
    const res = getRender(format).render(ast);

    return res;
  }
}
