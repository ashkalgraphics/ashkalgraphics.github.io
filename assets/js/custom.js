    $(document).ready(function(){
      $('.customer-logos').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
          pauseOnHover: false,
          responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        },{
          breakpoint: 380,
          settings: {
            slidesToShow: 1
          }
        },{
          breakpoint: 2100,
          settings: {
            slidesToShow: 7
          }
        },]
      });
    });
$( document ).ready(function() {
    if(localStorage.getItem('lang') == "swe"){
      toSwe();
    }else{
      //Set Default English
      toEng();
    }
      }); 
      function toEng(){
        $('[data-localize]').localize("lang", {language : "en"})
        console.log("Localization In Progress to ENG");
        localStorage.setItem('lang', 'en')
      }
      function toSwe(){
        $('[data-localize]').localize("lang", {language : "swe"})
        console.log("Localization In Progress to SWDDDDD");
        localStorage.setItem('lang', 'swe')
      }


// var swiper = new Swiper('.swiper-container', {
  
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },spaceBetween: 30,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         }, navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//           breakpoints: {
//       // when window width is >= 320px
//       // when window width is >= 480px
//       480: {
//         slidesPerView: 1,
//         spaceBetween: 30
//       },
//       // when window width is >= 640px
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 40
//       },
//       1000: {
//         slidesPerView: 3,
//         spaceBetween: 40
//       }
//     }
//       },
//       );    