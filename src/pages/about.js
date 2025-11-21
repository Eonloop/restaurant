function createAbout() {
    const main = document.getElementById('main');

    const contactContainer = createContainer('contact-container', main);
    createTextElement('h2', 'Contact Us', contactContainer, 'contact-heading');
    createTextElement('p', '555-555-5555', contactContainer, 'contact-info');
    createTextElement('p', 'cleoscrabshack@fakeemail.com', contactContainer, 'contact-info');

    const locationContainer = createContainer('location-container', main);
    createTextElement('h2', 'Location', locationContainer, 'location-heading');
    const mapElement = createElement({
        tag: 'iframe',
        attributes: {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21519.673394537534!2d-122.3555257972006!3d47.60748351027376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906bb2f3f5ca3d%3A0x93f18f02f14e0a2c!2sPike%20Place%20Market!5e0!3m2!1sen!2sus!4v1723573096007!5m2!1sen!2sus",
            width: "600",
            height: "450",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade"
        }
    });
    locationContainer.appendChild(mapElement);
}



function createElement({ tag, content = '', className = '', src = '', parent, attributes = {} }) {
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
    // Apply additional attributes
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
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


export default createAbout;