// function loader() {
//     var renderPage = true;

//     if (navigator.userAgent.indexOf('MSIE') !== -1 ||
//         navigator.appVersion.indexOf('Trident/') > 0) {
//         /* Microsoft Internet Explorer detected in. */
//         alert("Please view this in a modern browser such as Chrome or Microsoft Edge.");
//         renderPage = false;
//     }
// }
/** Carousel for hobbies page */
var myCarousel1 = document.querySelector('#carouselExampleControls1')
var carousel = new bootstrap.Carousel(myCarousel1, {
    interval: 1500,
    wrap: true
})

var myCarousel2 = document.querySelector('#carouselExampleControls2')
var carousel = new bootstrap.Carousel(myCarousel2, {
    interval: 1500,
    wrap: false
})
var myCarousel3 = document.querySelector('#carouselExampleControls3')
var carousel = new bootstrap.Carousel(myCarousel3, {
    interval: 1500,
    wrap: false
})