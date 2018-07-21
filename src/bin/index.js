import program from 'commander';
import FeedConvertor from '../ConvertFeed';

program.version('0.0.1')
  .arguments('<source>')
  .action((source) => {
    const Convertor = new FeedConvertor();
    const result = Convertor.convert(source);

    console.log(result);
  })
  .parse(process.argv);
