import AtomParser from './AtomParser';
import RssParser from './RssParser';

const getParser = (format) => {
  const parsers = {
    rss: RssParser,
    atom: AtomParser,
    default: AtomParser
  };

  const Parser = parsers[format] || parsers.default;

  return new Parser();
};

export default getParser;
