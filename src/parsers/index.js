import AtomParser from './AtomParser';
import RssParser from './RssParser';

const nullData = {
  title: '',
  subtitle: '',
  id: '',
  link: { href: '' },
  language: '',
  pubdate: new Date(),
  updated: new Date(),
  items: []
};

const nullItem = {
  title: '',
  link: { href: '' },
  description: '',
  id: '',
  pubdate: new Date(),
  updated: new Date(),
  author: { name: '', email: '' }
};


const getParser = (format) => {
  const parsers = {
    'rss 2.0': RssParser,
    atom: AtomParser,
  };

  return new parsers[format](nullData, nullItem);
};

export default getParser;
