import _ from 'lodash';

export default class AtomParser {
  constructor(nullData, nullItem) {
    this.nullData = nullData;
    this.nullItem = nullItem;
  }

  parse(data) {
    const {
      title, subtitle, id, link, language, pubdate, updated, items
    } = _.merge(this.nullData, data);

    return ({
      title,
      subtitle,
      id,
      link,
      language,
      pubdate,
      updated,
      items: this.parseItems(items)
    });
  }

  parseItems = items => items.map((item) => {
    const {
      title, link, summary: description, pubdate, id, updated, author
    } = _.merge(this.nullItem, item);

    return {
      title,
      link,
      description,
      id,
      pubdate,
      updated,
      author
    };
  })
}
