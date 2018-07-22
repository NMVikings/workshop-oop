export default class AtomRender {
  constructor() {
    this.dictionary = {
      description: 'summary'
    };
  }

  astToAtom = (ast) => {
    const nodeRenderers = {
      link: linkData => this.renderLink(linkData),
      items: itemsData => `<entry>${itemsData.map(this.astToAtom)}</entry>`,
      pubdate: date => this.renderTag('pubdate', new Date(date).toISOString()),
      updated: date => this.renderTag('updated', new Date(date).toISOString()),
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
      return `<${tagName}>${this.astToAtom(content)}</${tagName}>`;
    }

    return `<${tagName}>${content}</${tagName}>`;
  }

  renderLink = (linkData) => {
    const stringifyProps = props => Object.keys(props).map(key => `${key}="${props[key]}"`).join(' ');
    return `<link ${stringifyProps(linkData)} />`;
  }

  render = (ast) => {
    const xmlHeader = '<?xml version="1.0" encoding="utf-8"?>';
    const atomHeader = '<feed xmlns="http://www.w3.org/2005/Atom">';
    return [
      xmlHeader,
      atomHeader,
      this.astToAtom(ast),
      '</feed>'
    ].join('');
  }
}
