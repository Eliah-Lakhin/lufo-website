import './index.scss';
import Gumshoe from 'gumshoejs';
import SmoothScroll from 'smooth-scroll';
import stickybits from 'stickybits';

new Gumshoe('nav a', {
  navClass: 'active-nav-item'
});

new SmoothScroll('a[href*="#"]');

stickybits('nav', {
  stickyBitStickyOffset: 50,
});
