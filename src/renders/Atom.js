export default class Atom {
  astToAtom = (ast) => {
    const nodeRenderers = {
      link: linksData => Array.isArray(linksData) ? linksData.map(this.renderLink).join('') : this.renderLink(linksData),
      items: itemsData => `<entry>${itemsData.map(this.astToAtom)}</entry>`,
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
