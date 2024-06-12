new WOW().init();

let accordion = document.getElementsByClassName('party__item-left-box')

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click' , function(){
        this.classList.toggle('active')
    })
}


let open = document.querySelector('.nav__content-open');
let close = document.querySelector('.nav__content-close');
let list = document.querySelector('.nav__list');

open.addEventListener('click', () => {
    list.classList.add('active');
    close.style.display = 'block'
});


close.addEventListener('click', () => {
    list.classList.remove('active');
    close.style.display = 'none'
});
