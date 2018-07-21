const program = require('commander');
const FeedMe = require('feedme');
const fs = require('fs');


program.parse(process.argv);
const pathToFile = program.args[0] || './test.atom';

//read file
const file = fs.readFileSync(pathToFile, 'utf-8');

//parse xml
const parser = new FeedMe(true);
parser.write(file);
const { type, ...ast } = parser.done();


//renderAtom
const renderTag = (tagName, content) => {
  console.log(tagName)
  if (typeof content === 'object') {
    return `<${tagName}>${astToAtom(content)}</${tagName}>`;
  }

  return `<${tagName}>${content}</${tagName}>`;
};
const stringifyProps = props => Object.keys(props).map(key => `${key}="${props[key]}"`).join(' ');
const renderLink = props => `<link ${stringifyProps(props)} />`;

const nodeRenderers = {
  link: linksData => linksData.map(renderLink),
  items: itemsData => `<entry>${itemsData.map(astToAtom)}</entry>`,
  default: renderTag,
};

const astToAtom = ast => Object.keys(ast).map(
  key => key in nodeRenderers
    ? nodeRenderers[key](ast[key])
    : nodeRenderers.default(key, ast[key])
).join('');


const renderAtom = (ast) => {
  const xmlHeader = '<?xml version="1.0" encoding="utf-8"?>';
  const atomHeader = '<feed xmlns="http://www.w3.org/2005/Atom">';
  const res = [
    xmlHeader,
    atomHeader,
    astToAtom(ast),
    '</feed>'
  ].join('');


  const aparser = new FeedMe(true);
  aparser.write(res);
  return aparser.done();
};

//staff

// console.log(renderAtom());

// console.log(ast);
// console.log(res);

module.exports = {
  renderAtom,
};
