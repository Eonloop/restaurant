import crabSvg from '../assets/crab.svg';

function createHome() {

    const main = document.getElementById('main');


    // Create title section
    const title = createContainer('title-container', main);
    createImage(crabSvg, 'left-icon', title);
    createTextElement('h1', "Cleo's Crab Shack", title);
    createImage(crabSvg, 'right-icon', title);

    // Create info section
    const info = createContainer('about-container', main);
    createTextElement('p', "At Cleo's Crab Shack we're passionate about one thing and it's crab!", info);

    // Create hours section
    const hours = createContainer('hours-container', main);
    createTextElement('h3', "Hours", hours);
    createTextElement('p', "Sunday: 9am - 6pm", hours);
    createTextElement('p', "Monday: 7am - 10pm", hours);
    createTextElement('p', "Tuesday: 7am - 10pm", hours);
    createTextElement('p', 'Wednesday: Closed', hours);
    createTextElement('p', 'Thursday: 7am - 10pm', hours);
    createTextElement('p', 'Friday: 7am - 10pm', hours);
    createTextElement('p', 'Saturday: 7am - 10pm', hours);
    
    const location = createContainer('location-container', main);
    createTextElement('h3', 'Location', location);
    createTextElement('p', '555 Ocean Lane, Seattle Washington', location);
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

export default createHome;