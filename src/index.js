const program = require('commander');
const FeedMe = require('feedme');
const fs = require('fs');


program.parse(process.argv);
const pathToFile = program.args[0];

//read file
const file = fs.readFileSync(pathToFile, 'utf-8');

//parse xml
const parser = new FeedMe(true);
parser.write(file);
const data = parser.done();
