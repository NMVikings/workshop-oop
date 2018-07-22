import FeedMe from 'feedme';
// import xml2js from 'xml2js';
// import { promisify } from 'util';

export default class XmlParser {
  parse = async (file) => {
    // const parser = new xml2js.Parser({ explicitArray: false });
    // const res = await promisify(parser.parseString)(file);
    // return res;
    const parser = new FeedMe(true);
    parser.write(file);
    return parser.done();
  }
}
