import AtomRender from './AtomRender';
import RssRender from './RssRender';

const getRender = (format) => {
  const renders = {
    rss: RssRender,
    atom: AtomRender,
    default: AtomRender
  };

  const Render = renders[format] || renders.default;

  return new Render();
};

export default getRender;
