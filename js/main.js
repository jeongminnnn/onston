import '../scss/main.scss'
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper(".visual .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: 'creative',
    perspective: true,
    creativeEffect: {
        prev: {
        // will set `translateZ(-400px)` on previous slides
            translate: ['-100%', 0, 0],
        },
        next: {
        // will set `translateX(100%)` on next slides
            translate: ['100%', 0, 0],
        },
    },
});

const swiper1 = new Swiper(".platform .swiper", {
    slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
});

const swiper2 = new Swiper(".roadmap .swiper", {
    slidesPerView: 5,
        spaceBetween: 0,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
});


// COUNTER
$('.counter').counterUp({
    time: 1000
});