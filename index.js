class EventHandler {
    constructor(prop) {
        this.lastTarget = prop.targ
        this.intervalId
        this.isThrottle = false
        this.content = prop.content
        
        this.getInfoClick = this.getInfoClick.bind(this)
        this.addNewDiv = this.addNewDiv.bind(this)
        this.toSleep = this.toSleep.bind(this)
    }

    toSelectNav(event) {
        event.preventDefault()

        this.lastTarget.classList.remove('selected')
        event.target.classList.add('selected')

        this.getInfoClick(event.target) // maybe event.target is not needed
        this.lastTarget = event.target
    }

    addNewDiv(currNode) {
        const about = document.querySelector('.about-me')
        if (currNode.name == 'general' || currNode.name == 'study' || currNode.name == 'skills') {
            about.insertAdjacentHTML('beforeend', this.content[currNode.name])
            return
        }
        const div = `<div name='about__${currNode.name}' class="about-me__${currNode.name}"><h2 class="about__heading">${currNode.name}</h2></div>`
        about.insertAdjacentHTML('beforeend', div)
    }

    toSleep(target) { 
        return new Promise((resolve, reject) => {   // можно накидывать класс с анимацией и через таймаут анимации просто возвращать resolve, тем самым отслеживать конец анимки
            this.isThrottle = true
            target.style.opacity = 1
            this.intervalId = setInterval(() => {
                target.style.opacity <= 0 ? resolve(target) : target.style.opacity -= 0.07
            }, 30)
        })
    }

    getInfoClick(node) { // idk for what here is node
        if (!this.isThrottle) {
            const sleepTarget = document.querySelector(`div[name^=about__${this.lastTarget.name}]`)
            this.toSleep(sleepTarget).then(res => {
                clearInterval(this.intervalId)
                this.addNewDiv(this.lastTarget)
                res.remove()
                this.isThrottle = false
            })
        }
    }
}

const content = {
    general: `
            <div name='about__general' class="about-me__general">
                <div class="about-me__photo"></div>
                <p class="about-me__slim">
                    Если на странице есть кот - это мило, если на странице есть кот в очках и панаме - это круто.
                </p>
            </div>
    `,
    study: `
    <div name="about__study" class="about-me__study">
                <h1 class="about-me__heading">Учеба</h1>
                <p class="about-me__body">
                   В первую очередь стоит сказать, что я закончил обычную школу,
                   и пошел в колледж при пгниу на место <span class="body__select">разработчика</span>
                   проходили мы мат.логику, теорию вероятности, высш мат, компьютерные системы и все в духе
                   <span class="body__select">истинного программиста</span>. В общей сложности, нам преподавали
                   так же языки программирования, плюсы (C++), хэштег (C#), PhP и непосредственно базы данных.
                   Но больших плодов это не дало, поэтому я решил изучать самостоятельно, так что можно считать
                   что я самоучка.
                </p>
                <p class="about-me__body">
                    Изучаю и пишу код я примерно с год, шел по учебнику на сайте learn.js, читал книгу от 
                    Кайли Симпсона "Вы не знаете JS", посмотрел HTMLBook <span class="fue">(прочитал пару глав)</span>, 
                    смотрел лекции по фронтенду от Яндекс 
                    и проходил курс от Яндекс Практикума до JS <span class="fue">(потом мне закрыли доступ
                    так как аккаунт был знакомого)</span>. Таким образом я собрал
                    по кусочкам, знания об Frontend разработке из разных источников. Конечно же
                    без Pet проектов не обошлось, на тех ошибках которые я делал я учился, будь это
                    курсовая / диплом / отчет или просто ради интереса, как сейчас это портфолио.
                </p>
                <p class="about-me__slim">
                    Наруто смог стать Хокаге, значит и я смогу стать разработчиком
                </p>
            </div>`,
    skills: `
    <div name="about__skills" class="about-me__skils">
                <h1 class="about-me__heading">Хард скилы или <span class="body__select">что я умею</span>.</h1>
                <p class="about-me__body">
                 Как упомянуто было в прошлом пунке, я брал материалы из разных истоничков,
                 но в основном это было связано с базовыми технологиями для того что бы начать
                 разрабатывать что либо. В данном пункте я хочу выделить то, на каких технологиях
                 я умею писать и чувствую себя уверенно.   
                </p>
                <div class="about-me__card-template">
                    <div class="about-me__card">
                        <h2 class="about-me__card-heading">HTML</h2>
                    </div>
                    <div class="about-me__card">
                        <h2 class="about-me__card-heading">CSS</h2>
                    </div>
                    <div class="about-me__card">
                        <h2 class="about-me__card-heading">JavaScript</h2>
                    </div>
                    <div class="about-me__card">
                        <h2 class="about-me__card-heading">React</h2>
                    </div>
                    <div class="about-me__card">
                        <h2 class="about-me__card-heading">Redux</h2>
                    </div>
                    <div class="about-me__card">
                        <h2 class="about-me__card-heading">MySQL</h2>
                    </div>
                </div>
                <p class="about-me__body about-me__space_top">
                   Не знаю, есть ли смысл упомянуть о том, что я умею работать с Git,
                   UI компонентами и всеми второстепенными библиотеками. Пусть будет
                   так, так красивее по крайней мере :)
                </p>
            </div>
    `
    
}


const EventHandlers = new EventHandler({targ: document.querySelector('a.nav-link.selected'), content})

window.onload = () => {
    const list = document.querySelector('.about-me__links').addEventListener('click', (event) => {
        if (event.target.tagName != 'A') return NaN;
        EventHandlers.toSelectNav(event,)
    })
}

