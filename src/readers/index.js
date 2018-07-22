import FileReader from './FileReader';
import HttpReader from './HttpReader';

const getReader = (source) => {
  const Reader = source.startsWith('http') ? HttpReader : FileReader;

  return new Reader();
};

export default getReader;
