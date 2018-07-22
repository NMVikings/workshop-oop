import FeedMe from 'feedme';
// import xml2js from 'xml2js';
// import { promisify } from 'util';
// import a from 'xml2json';

export default class XmlParser {
  parse = async (file) => {
    // const parser = new xml2js.Parser({ explicitArray: false });
    // const res = await promisify(parser.parseString)(file);
    // return res;
    // console.log(a.toJson(file, { object: true }));
    const parser = new FeedMe(true);
    parser.write(file);
    return parser.done();
  }
}
