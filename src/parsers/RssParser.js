import _ from 'lodash';

export default class RssParser {
  constructor(nullData, nullItem) {
    this.nullData = nullData;
    this.nullItem = nullItem;
  }

  parse(data) {
    const {
      title, description: subtitle, id, link: href, language, pubdate, updated, items
    } = _.merge(this.nullData, data);

    return ({
      title,
      subtitle,
      id,
      link: { href },
      language,
      pubdate,
      updated,
      items: this.parseItems(items)
    });
  }

  parseItems = items => items.map((item) => {
    const {
      title, link: href, description, pubdate, guid: id, updated, author
    } = _.merge(this.nullItem, item);

    return {
      title,
      link: { href },
      description,
      id,
      pubdate,
      updated,
      author
    };
  })
}
