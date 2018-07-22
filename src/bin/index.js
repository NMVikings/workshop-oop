import program from 'commander';
import FeedConvertor from '..';

program.version('0.0.1')
  .arguments('<source>')
  .option('--sort', 'Sort fedd items by date')
  .option('--limit <n>', 'Limit of items', parseInt)
  .option('--reverse', 'Reverse items list')
  .option('--out [type]', 'Choose format')
  .action(async (source, { out: format, reverse = false, limit = null, sort = false }) => {
    const Convertor = new FeedConvertor({ transformers: [] });
    const result = await Convertor.convert(source, format);

    console.log(result);
  })
  .parse(process.argv);
