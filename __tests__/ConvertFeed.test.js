import fs from 'fs';
import ConvertFeed from '../src';


test('test.atom file', () => {
  const filePath = '__tests__/__fixtures__/test.atom';
  const file = fs.readFileSync(filePath, 'utf-8');

  const result = new ConvertFeed().convert(filePath);

  expect(result).toBe(file);
});
