import FeedMe from 'feedme';

export default class XmlParser {
  parse(file) {
    const parser = new FeedMe(true);
    parser.write(file);
    return parser.done();
  }
}
