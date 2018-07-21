import fs from 'fs';
import ConvertFeed from '../src/ConvertFeed';


test('test.atom file', () => {
  const filePath = './test2.atom';
  const file = fs.readFileSync(filePath, 'utf-8');

  const result = new ConvertFeed().convert(filePath);

  expect(result).toBe(file);
});
