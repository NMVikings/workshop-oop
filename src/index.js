import getRender from './renders';
import getParser from './parsers';
import getReader from './readers';
import XmlParser from './XmlParser';


export default class Converter {
  constructor({ transformers }) {
    this.transformers = transformers;
  }

  convert = async (source, format = 'atom') => {
    const Reader = getReader(source);
    const file = await Reader.read(source);

    //parse xml
    const { type, ...ast } = await new XmlParser().parse(file);

    //parse to ast
    const data = getParser(type).parse(ast);

    //renderAtom
    const res = getRender(format).render(data);

    return res;
  }
}
