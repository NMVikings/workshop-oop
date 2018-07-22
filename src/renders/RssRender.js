export default class RssRender {
  constructor() {
    this.dictionary = {
      subtitle: 'description',
      id: 'guid',
      pubdate: 'pubDate',
      updated: 'lastBuildDate',
    };
  }

  astToRss = (ast) => {
    const nodeRenderers = {
      items: itemsData => itemsData.map(itemAst => `<item>${this.astToRss(itemAst)}</item>`).join(''),
      link: ({ href }) => this.renderTag('link', href),
      pubdate: date => this.renderTag('pubdate', new Date(date).toUTCString()),
      updated: date => this.renderTag('updated', new Date(date).toUTCString()),
      default: this.renderTag,
    };

    return Object.keys(ast).map(
      key => key in nodeRenderers
        ? nodeRenderers[key](ast[key])
        : nodeRenderers.default(key, ast[key])
    ).join('');
  }

  renderTag = (key, content) => {
    const tagName = this.dictionary[key] || key;
    if (typeof content === 'object') {
      return `<${tagName}>${this.astToRss(content)}</${tagName}>`;
    }

    return `<${tagName}>${content}</${tagName}>`;
  }

  stringifyProps = props => Object.keys(props).map(key => `${key}="${props[key]}"`).join(' ');

  renderLink = linkData => `<link ${this.stringifyProps(linkData)} />`;


  render = (ast) => {
    const xmlHeader = '<?xml version="1.0"?>';
    const rssHeader = '<rss version="2.0">';
    return [
      xmlHeader,
      rssHeader,
      '<channel>',
      this.astToRss(ast),
      '</channel>',
      '</rss>'
    ].join('');
  }
}
