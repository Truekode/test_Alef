"use strict"

document.querySelector('.footer__close').addEventListener('click', () => {
    document.querySelector('#emailInput').value = '';
})

document.querySelector('#productPlus').addEventListener('click', () => {
    document.querySelector('#productCont').value = 1 + Number(document.querySelector('#productCont').value);
})

document.querySelector('#productMinus').addEventListener('click', () => {
    if (document.querySelector('#productCont').value > 1 ) {
        document.querySelector('#productCont').value =Number(document.querySelector('#productCont').value) - 1;
    }
 })

document.querySelectorAll('.product-box__btn').forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.product-box__btn').forEach((item, index) => {
            item.classList.remove('product-box__btn-active');
        })
            document.querySelector('#boxImg').src = './img/Group-'+ (index+1) +'.png';
        item.classList.add('product-box__btn-active');
    })
})

const btnMenu = document.querySelector('#burgerBtn');
const btnMenuClose = document.querySelector('.header__mobile-close');
const menu = document.querySelector('.header__mobile');
const toggleMenu = function() {
    menu.classList.toggle('header__mobile-open');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenuClose;
    const menu_is_active = menu.classList.contains('header__mobile-open');

    if ((!its_menu || its_btnMenu) && menu_is_active) {
        toggleMenu();
    }
});

document.querySelector('.header').addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop)
})

let lastScroll = 0;
const defaultOffset = 500;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

document.querySelector('.product__info-btn').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.modal__text').textContent = 'товар '+ document.querySelector('.product__info-title').textContent +' в количестве '+ document.querySelector('#productCont').value +' единиц добавлен в корзину';
    setTimeout(() => {
        document.querySelector('.modal').style.display = 'none';
    }, 2000);
})

document.querySelector('.product__info-favorite').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.modal__text').textContent = 'Товар '+ document.querySelector('.product__info-title').textContent +' в количестве '+ document.querySelector('#productCont').value +' единиц добавлен в избранное';
    setTimeout(() => {
        document.querySelector('.modal').style.display = 'none';
    }, 2000);
})