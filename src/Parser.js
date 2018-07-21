import FeedMe from 'feedme';

export default class Parser {
  parse(file) {
    const parser = new FeedMe(true);
    parser.write(file);
    return parser.done();
  }
}
