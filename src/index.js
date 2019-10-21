import './styles/index.scss';

import Gumshoe from 'gumshoejs';
import SmoothScroll from 'smooth-scroll';
import stickybits from 'stickybits';

new Gumshoe('nav a', {
  nested: true,
  offset: 200,
});

new SmoothScroll('a[href*="#"]', {
  speed: 500,
	speedAsDuration: true,
});

stickybits('nav', {
  stickyBitStickyOffset: 50,
});
