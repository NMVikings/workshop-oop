import program from 'commander';
import FeedConvertor from '..';

program.version('0.0.1')
  .arguments('<source>')
  .action(async (source) => {
    const Convertor = new FeedConvertor();
    const result = await Convertor.convert(source);

    console.log(result);
  })
  .parse(process.argv);
