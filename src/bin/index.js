import program from 'commander';
import FeedConvertor from '..';

program.version('0.0.1')
  .arguments('<format> <source>')
  .option('--out', 'Choose format')
  .action(async (format, source) => {
    const Convertor = new FeedConvertor();
    const result = await Convertor.convert(source, format);

    console.log(result);
  })
  .parse(process.argv);
