function createMenu () {

    const main = document.getElementById('main');

    //Create breakfast menu
    const breakfastContainer = createContainer('breakfast-container', main);
    createTextElement('h2', 'Breakfast', breakfastContainer, 'breakfast-heading');
    createTextElement('p', 'Crab and Eggs Benedict', breakfastContainer);
    createTextElement('p', 'Biscuits and Crab', breakfastContainer);
    createTextElement('p', "Crab n' Grits", breakfastContainer);

    //Create lunch menu
    const lunchContainer = createContainer('lunch-container', main);
    createTextElement('h2', 'Lunch', lunchContainer, 'lunch-heading');
    const lunchItem1 = createContainer('menu-item', lunchContainer);
    createTextElement('h3', 'Crab Cakes', lunchItem1);
    createTextElement('p', 'Crab Rangoon', lunchContainer);
    createTextElement('p', 'Crab Burger', lunchContainer);

    const dinnerContainer = createContainer('dinner-container', main);
    createTextElement('h2', 'Dinner', dinnerContainer, 'dinner-heading');
    createTextElement('p', "Crab n' Lobster", dinnerContainer);
    createTextElement('p', 'Crab Roll', dinnerContainer);
    createTextElement('p', "Crab Salad", dinnerContainer);
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

export default createMenu