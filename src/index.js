const program = require('commander');
const FeedMe = require('feedme');
const fs = require('fs');
const Atom = require('./renders/Atom');


program.parse(process.argv);
const pathToFile = program.args[0] || './test.atom';

//read file
const file = fs.readFileSync(pathToFile, 'utf-8');

//parse xml
const parser = new FeedMe(true);
parser.write(file);
const { type, ...ast } = parser.done();


//renderAtom
const AtomRender = new Atom();

const res = AtomRender.render(ast);

console.log(res);


//staff

// console.log(renderAtom());

// console.log(ast);
// console.log(res);