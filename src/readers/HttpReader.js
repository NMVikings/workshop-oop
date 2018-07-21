import axios from 'axios';

export default class HttpReader {
  constructor(source) {
    this.source = source;
  }

  read = async () => {
    const data = await axios.get(this.source);
    return data.data;
  }
}
