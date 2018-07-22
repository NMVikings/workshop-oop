import getRender from './renders';
import getParser from './parsers';
import getReader from './readers';
import XmlParser from './XmlParser';

export default class Converter {
  convert = async (source, format = 'atom') => {
    const file = await getReader(source).read();

    //parse xml
    const { type, ...ast } = new XmlParser().parse(file);

    //parse to ast
    const data = getParser(type).parse(ast);

    console.log(data)

    //renderAtom
    const res = getRender(format).render(data);

    return res;
  }
}
