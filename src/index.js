import EventHandler from "./EventHandler";
import './styles.css'

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
    `,
    projects: `
    <div name="about__projects" class="about-me__projects">
        <h1 class="about-me__heading">Проекты</h1>
        <p class="about-me__body">
            Снизу представлен список с некоторыми проектами которые я делал, так или иначе совершенно
            плохие проекты в этот список я не включил. 
        </p>
        <div class="about-me__cards-list">
            <a href="https://github.com/heartbreaks/mobile-app-to-diploma" class="about-me__tail about-me__tail-link">
                <img src="../assets/diploma.jpg" width="100" height="100" class="about-me__tail-photo">
                <div class="about-me__tail-body">
                    <h2 class="about-me__tail-heading">
                        Дипломная работа
                    </h2>
                    <h3 class="about-me__tail-subheading">
                        React-Native, ExpressJS, MySQL, Axios etc.
                    </h3>
                    <p class="about-me__tail-body">
                        Bпервые в жизни тыкался в RN. И с многими другими либами, местами обходился без документации,
                        и старался как можно быстрее сделать приложение. Так как времени было мало на написание
                        диплома, в связи работой и учебой. 
                    </p>
                </div>
            </a>
            <a href="https://github.com/heartbreaks/text-chat-room" class="about-me__tail about-me__tail-link">
                <img src="../assets/тестовое%20задание%20чат.jpg" width="100" height="100" class="about-me__tail-photo">
                <div class="about-me__tail-body">
                    <h2 class="about-me__tail-heading">
                        Тестовое задание (чат)
                    </h2>
                    <h3 class="about-me__tail-subheading">
                        ReactJS, WebSocket.
                    </h3>
                    <p class="about-me__tail-body">
                        Создал свой собственный чат :) Правда не такой эффективный как Telegram, Viber и другие чаты,
                        но все же сделал. С вебсокетами работал так же впервые в жизни. Справился за 3 дня.
                    </p>
                </div>
            </a>
            <a href="https://github.com/heartbreaks/vigilant-umbrella" class="about-me__tail about-me__tail-link">
                <img src="../assets/testovoe_not_chat.jpg" width="100" height="100" class="about-me__tail-photo">
                <div class="about-me__tail-body">
                    <h2 class="about-me__tail-heading">
                        Тестовое задание (управление сотрудниками?)
                    </h2>
                    <h3 class="about-me__tail-subheading">
                        ReactJS, Redux, Bootstrap.
                    </h3>
                    <p class="about-me__tail-body">
                        Приложение для грубо говоря управления сотрудниками, писал код спокойно и размерено.
                        Использовал редакс, не так чисто код написан как хотелось бы, но все же. Справился за 12 часов, но,
                        до написания кода продумывал архитектуру. Так что можно сказать что справился за 1 день и 12 часов.
                    </p>
                </div>
            </a>
            <a href="https://github.com/heartbreaks/heartbreaks.github.io" class="about-me__tail about-me__tail-link">
                <img src="../assets/buses.png" width="100" height="100" class="about-me__tail-photo">
                <div class="about-me__tail-body">
                    <h2 class="about-me__tail-heading">
                        Расписание автобусов
                    </h2>
                    <h3 class="about-me__tail-subheading">
                    JavaScript, CSS, HTML.
                    </h3>
                    <p class="about-me__tail-body">
                        Когда только начал постягать азы программирования решил сделать собственное динамическое расписание автобусов
                        так как я живу в ПГТ, у нас автобусы по расписанию. Расписание подсвечивает ближайший автобус. Справился за
                        несколько дней
                    </p>
                </div>
            </a>
        </div>
        <p class="about-me__slim">
            Интересно, это кто то читает?
        </p>
    </div>
    `,
    jobs: `
    <div name="about__jobs" class="about-me__jobs">
     <h1 name="about__jobs" class="about-me__jobs">Nan</h1>             
    </div>
        `
}

const EventHandlers = new EventHandler({targ: document.querySelector('a.nav-link.selected'), content})

window.onload = () => {
    const list = document.querySelector('.about-me__links').addEventListener('click', (event) => {
        if (event.target.tagName != 'A') return NaN;
        EventHandlers.toSelectNav(event)
    })
}
