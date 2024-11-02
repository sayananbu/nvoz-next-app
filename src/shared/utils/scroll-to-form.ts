import { scroller } from 'react-scroll';

export function scrollToForm() {
  scroller.scrollTo('contact-form', {
    duration: 600,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -200,
  });
}
