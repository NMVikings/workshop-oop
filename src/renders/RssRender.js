export default class RssRender {
  astToRss = (ast) => {
    const nodeRenderers = {
      items: itemsData => itemsData.map(itemAst => `<item>${this.astToRss(itemAst)}</item>`).join(''),
      pubdate: content => `<pubDate>${content}</pubDate>`,
      lastbuilddate: content => `<lastBuildDate>${content}</lastBuildDate>`,
      managingeditor: content => `<managingEditor>${content}</managingEditor>`,
      webmaster: content => `<webMaster>${content}</webMaster>`,
      default: this.renderTag,
    };

    return Object.keys(ast).map(
      key => key in nodeRenderers
        ? nodeRenderers[key](ast[key])
        : nodeRenderers.default(key, ast[key])
    ).join('');
  }

  renderTag = (tagName, content) => {
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
