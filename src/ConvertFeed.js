
const FeedMe = require('feedme');
const fs = require('fs');
const Atom = require('./renders/Atom');

export default class Converter {
  convert(pathToFile) {
    //read file
    const file = fs.readFileSync(pathToFile, 'utf-8');

    //parse xml
    const parser = new FeedMe(true);
    parser.write(file);
    const { type, ...ast } = parser.done();


    //renderAtom
    const AtomRender = new Atom();

    const res = AtomRender.render(ast);

    return res;
  }
}
