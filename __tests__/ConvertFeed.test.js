import fs from 'fs';
import ConvertFeed from '../src';


test('test.atom file', async () => {
  const filePath = '__tests__/__fixtures__/test.atom';
  const file = fs.readFileSync(filePath, 'utf-8');

  const result = await new ConvertFeed().convert(filePath, 'atom');

  expect(result).toBe(file);
});

test('test.rss file', async () => {
  const filePath = '__tests__/__fixtures__/test2.rss';
  const file = fs.readFileSync(filePath, 'utf-8');

  const result = await new ConvertFeed().convert(filePath, 'rss');

  expect(result).toBe(file);
});
