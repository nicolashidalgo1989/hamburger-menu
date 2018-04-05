const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const linksMenu = document.querySelectorAll('.menu a');

const line = document.createElement('span');
line.className = 'line';
hamburgerMenu.appendChild(line);

const menu = document.createElement('nav');
menu.className = 'menu hide';
body.appendChild(menu);

const uList = document.createElement('ul');
menu.appendChild(uList);

const bg = document.createElement('div');
bg.className = 'bgFixed hide';
body.appendChild(bg);

hamburgerMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('line')) {
        e.target.parentElement.classList.toggle('close');
    } else {
        e.target.classList.toggle('close');
    }
    bg.classList.toggle('hide');
    menu.classList.toggle('hide');
});

let links = [{
        name: 'Google',
        href: 'https://www.google.com',
        target: '_blank'
    },
    {
        name: 'JSfiddle',
        href: 'https://www.jsfiddle.net',
        target: '_blank'
    },
    {
        name: 'Github',
        href: 'https://www.github.com',
        target: '_blank'
    }
];

links.forEach(function(items) {
    let list = document.createElement('li');
    let link = document.createElement('a');
    uList.appendChild(list);
    list.appendChild(link);
    link.innerHTML = items.name;
    link.setAttribute('href', items.href);
    link.setAttribute('target', items.target);
});
