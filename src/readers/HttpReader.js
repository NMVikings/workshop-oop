import axios from 'axios';

export default class HttpReader {
  read = async (pathToFile) => {
    const data = await axios.get(pathToFile);
    return data.data;
  }
}
