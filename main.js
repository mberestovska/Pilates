 // for menu 
 function myFunction(x) {
     x.classList.toggle("change");
     // display naviagation bar
     var popup = document.querySelector('.nav-block');
     popup.classList.toggle('hidden');
 }
 // to close navigation bar with any keyboard button
 document.addEventListener('keydown', function () {
     var closePopup = document.querySelector('.nav-block');
     closePopup.classList.remove('hidden');
     var menuIcon = document.querySelector('.menu');
     menuIcon.classList.remove('change');
 });
 // 
 function closeMenu() {
     var menuBlock = document.querySelector('.nav-block');
     menuBlock.classList.remove('hidden');
     var menuIcon = document.querySelector('.menu');
     menuIcon.classList.remove('change');
 }
/*
 // for review scroll
 var card = document.querySelector('.review-card');
 var widthBlock1 = 750; // ширина изображения
 var count = 1; // количество изображений(як в масиві)

 var carousel = document.querySelector('.review-part');
 var list = carousel.querySelector('.slider');
 var listElems = carousel.querySelectorAll('li');

 var dotSlide = document.querySelector('.show-review');
 var dots = dotSlide.querySelectorAll('div');
 var position = 0; // текущий сдвиг влево
 var countClick = 0; // current element
 
 carousel.querySelector('.arrow-back').onclick = function () {
    countClick -- 
     // сдвиг влево
     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
     position = Math.min(position + widthBlock1 * count, 0)
     list.style.marginLeft = position + 'px';
     if (countClick == listElems.length || countClick < 0) {
        countClick = 0;
        console.log('stopped on ' + countClick); 
     }
     dots[countClick+1].classList.remove('show-review-active');
     dots[countClick].classList.add('show-review-active');

 };
 
 carousel.querySelector('.arrow-forward').onclick = function () {
    countClick ++
     // сдвиг влево
     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
     position = Math.max(position - widthBlock1 * count, -widthBlock1 * (listElems.length - count));
     list.style.marginLeft = position + 'px';
     if (countClick == listElems.length || countClick < 0) {
        countClick = listElems.length-1;
        console.log('stopped on ' + countClick); 
     }
     dots[countClick-1].classList.remove('show-review-active');
     dots[countClick].classList.add('show-review-active');
 };

 */