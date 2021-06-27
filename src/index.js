import EventHandler from './EventHandler';
import './styles.css';
import content from './content';


const EventHandlers = new EventHandler({
  targ: document.querySelector('a.nav-link.selected'),
  content,
});

window.onload = () => {
  // eslint-disable-next-line max-len
  document.querySelector('.about-me__links').addEventListener('click', (event) => {
    if (event.target.tagName != 'A') return NaN;
    EventHandlers.toSelectNav(event);
  });
};
