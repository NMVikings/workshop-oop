const fs = require('fs');
const FeedMe = require('feedme');
const Atom = require('../src/renders/Atom');


test('test.atom file', () => {
  const file = fs.readFileSync('./test2.atom', 'utf-8');
  const parser = new FeedMe(true);
  parser.write(file);
  const { type, ...ast } = parser.done();

  const AtomRender = new Atom();
  const result = AtomRender.render(ast);

  expect(result).toBe(file);
});
