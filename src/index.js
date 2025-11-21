import createHome from './pages/home';
import createMenu from './pages/menu';
import createAbout from './pages/about';
import './styles/home.css';
import './styles/menu.css';
import './styles/about.css';

createNav();

createHome();

const main = document.getElementById('main');

function createNav() {
    const nav = document.getElementById('nav');
    const buttonContainer = createContainer('button-container', nav);
    const homeButton = createButton('Home', buttonContainer);
    const menuButton = createButton('Menu', buttonContainer);
    const aboutButton = createButton('About', buttonContainer);

    homeButton.addEventListener('click', () => {
        setSelectedButton(homeButton);
        main.innerHTML = '';
        createHome();
    });

    menuButton.addEventListener('click', () => {
        setSelectedButton(menuButton);
        main.innerHTML = '';
        createMenu();
    });

    aboutButton.addEventListener('click', () => {
        setSelectedButton(aboutButton);
        main.innerHTML = '';
        createAbout();
    });
}

function setSelectedButton(selectedButton) {
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => button.classList.remove('selected'));
    selectedButton.classList.add('selected');
}





function createElement({ tag, content = '', className = '', src = '', parent }) {
    const element = document.createElement(tag);
    if (content) {
        element.textContent = content;
    }
    if (className) {
        element.classList.add(className);
    }
    if (src) {
        element.src = src;
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

function createContainer(className, parent) {
    return createElement({ tag: 'div', className, parent });
}

function createTextElement(tag, content, parent, className = '') {
    return createElement({ tag, content, className, parent });
}

function createImage(src, className, parent) {
    return createElement({ tag: 'img', src, className, parent })
}

function createButton(content, parent, className = '') {
    return createElement({ tag: 'button', content, parent, className });
}