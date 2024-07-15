// document.addEventListener('DOMContentLoaded', function() {
//     // Swiper initialization code here
//     const swiper = new Swiper('.slider-wrapper', {
//         // Optional parameters
//         loop: true,
//         spaceBetween: 40,
//         slidesPerView: 3, // Show 3 slides per view by default
    
//         // If we need pagination
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
    
//         // Navigation arrows
//         // navigation: {
//         //     nextEl: '.swiper-button-next',
//         //     prevEl: '.swiper-button-prev',
//         // },
    
//         // And if we need scrollbar
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         },
//     });
    
// });
const container = document.querySelector(".container");
container.Swiip({
    prevBtn: document.querySelector('.prev'),
    nextBtn: document.querySelector('.next'),
    slidesToScroll: 1,
    slidesVisible: 4,
    // autoPlay: true,
    // autoPlaySpeed: 3000,
    gap: 15,
    responsive: [
        {
            breakpoint: 1024,
            slidesToScroll: 1,
            slidesVisible: 3,
            gap:15,
            // autoPlay: true,
            // autoPlaySpeed: 3000
        },
        {
            breakpoint: 768,
            slidesToScroll: 1,
            slidesVisible: 2,
            gap: 15,
            // autoPlay: true,
            // autoPlaySpeed: 2000
        },
        {
            breakpoint: 576,
            slidesToScroll: 1,
            slidesVisible: 2,
            gap: 15,
            // autoPlay: true,
            // autoPlaySpeed: 2000
        },
        {
            breakpoint: 400,
            slidesToScroll: 1,
            slidesVisible: 1,
            gap: 15,
            // autoPlay: true,
            // autoPlaySpeed: 2000
        }
    ]
});

