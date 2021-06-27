export default class EventHandler {
  constructor(prop) {
    this.lastTarget = prop.targ;
    this.intervalId;
    this.isThrottle = false;
    this.content = prop.content;

    this.getInfoClick = this.getInfoClick.bind(this);
    this.addNewDiv = this.addNewDiv.bind(this);
    this.toSleep = this.toSleep.bind(this);
  }

  toSelectNav(event) {
    event.preventDefault();

    this.lastTarget.classList.remove('selected');
    event.target.classList.add('selected');

    this.getInfoClick();
    this.lastTarget = event.target;
  }

  addNewDiv(currNode) {
    const about = document.querySelector('.about-me');
    about.insertAdjacentHTML('beforeend', this.content[currNode.name]);
    return true;
  }

  toSleep(target) {
    /* можно накидывать класс с анимацией
       и через таймаут анимации просто возвращать
       resolve, тем самым отслеживать конец анимки
    */
    return new Promise((resolve) => {
      this.isThrottle = true;
      target.style.opacity = 1;
      this.intervalId = setInterval(() => {
        target.style.opacity <= 0 ?
        resolve(target) : target.style.opacity -= 0.07;
      }, 30);
    });
  }

  getInfoClick() {
    if (!this.isThrottle) {
      // eslint-disable-next-line max-len
      const sleepTarget = document.querySelector(`div[name^=about__${this.lastTarget.name}]`);
      this.toSleep(sleepTarget).then((res) => {
        clearInterval(this.intervalId);
        this.addNewDiv(this.lastTarget); // rn thats is current target
        res.remove();
        this.isThrottle = false;
      });
    }
  }
}
