var menu = document.querySelector('ul');
var menuBar = document.querySelector('.menu-icon');
var iconMenu = document.querySelector('.botaomenu');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
        iconMenu.setAttribute("src","imagens/close.png");
    }else{
        iconMenu.setAttribute("src","imagens/menu.png");
    }

   menu.classList.toggle('active');
});