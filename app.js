const menuBoton = document.querySelector('.botonHamburguesa');
const fondo = document.querySelector('.bgFixedMenuSantander');
const menu = document.querySelector('.menuDesplegable');
const menuResponsive = document.querySelector('.listadoMenu');
menuBoton.addEventListener('click',function(e){
    e.preventDefault();
    let iconoMenu = menuBoton.children[0].classList;
    if(iconoMenu.value === 'linea'){
        iconoMenu.add('equis');
        fondo.classList.remove('bgFixedMenuOculto');
        menu.classList.remove('menuOculto');
    }else{
        iconoMenu.remove('equis');
        fondo.classList.add('bgFixedMenuOculto');
        menu.classList.add('menuOculto');
    }
});
menuResponsive.addEventListener('click',function(e){
    let elem = e.target.parentElement;
    let altura = elem.children[2].scrollHeight;  
    let links = elem.parentElement.children;  
    let arrayLinks = Array.from(links);   
    for(i=0;i<4;i++){ 
        arrayLinks[i].children[2].style.height = `0px`;  
    }
    elem.children[2].classList.toggle('active'); 
    elem.children[1].classList.toggle('str-flecha-arriba'); 
    if(elem.children[2].className == 'active'){ 
        elem.children[2].style.height = `${altura}px`;  
    }else{
        elem.children[2].style.height = `0px`;
    } 
});
ayudaBoton.addEventListener('click', function(e){  
    e.target.parentElement.parentElement.children[1].classList.toggle('displayNone');   
    e.stopPropagation();
}); 
for (i = 0; i < footer.length; i++){
    footer[i].addEventListener('click', function(e){
        e.preventDefault(); 
        let elem = e.target.parentElement;
        let altura = elem.children[1].scrollHeight;  
        let links = elem.parentElement.children;
        let arrayLinks = Array.from(links);
        for(i=0;i<arrayLinks.length;i++){  
            arrayLinks[i].children[1].style.height = `0px`;
            arrayLinks[i].children[1].classList.remove('active');
        } 
        elem.children[1].classList.add('active');  
        if(elem.children[1].className == 'active'){ 
            elem.children[1].style.height = `${altura}px`;  
        }else{
            elem.children[1].style.height = `0px`;
        } 
    });
};
