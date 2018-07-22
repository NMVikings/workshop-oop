import axios from 'axios';

export default class HttpReader {
  read = async (source) => {
    const data = await axios.get(source);
    return data.data;
  }
}
