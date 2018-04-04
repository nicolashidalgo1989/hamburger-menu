document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');  
    const line = document.createElement('span');
    line.className = 'line';
    hamburgerMenu.appendChild(line);   
    hamburgerMenu.addEventListener('click', (e) => {
        e.preventDefault();  
        if(e.target.classList.contains('line')){
            e.target.classList.toggle('equis');  
        }else{
            e.target.children[0].classList.toggle('equis');  
        };
    });  
})
