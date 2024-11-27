
window.addEventListener('scroll', function(){
    let header = document.querySelector('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});

let abrir_menu = document.getElementById('abrir_menu');
let menu_mobile = document.getElementById('menu_mobile');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('abrir_menu')
})