const fs = require('fs');
const FeedMe = require('feedme');
const { renderAtom } = require('../src/index');


test('test.atom file', () => {
  const file = fs.readFileSync('./test.atom', 'utf-8');
  const parser = new FeedMe(true);
  parser.write(file);
  const res = parser.done();

  console.log(res);
  expect(renderAtom(res)).toBe(res);
});
