const barsNavbar = document.querySelector('.header-kedua .head .bars');
const bars = document.querySelector('.header-kedua .head .bars i');
const navbarMenu = document.querySelector('.header-kedua .head .navbar ul');
const header = document.getElementById("header-kedua");
const btnTop = document.querySelector(".container .btn-top");

// event navbar responsive
barsNavbar.addEventListener('click', function(){
    navbarMenu.classList.toggle('active');
    bars.classList.toggle('active');
});

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {navSticky()};
  // mencari posisi ofsite navbar
  let sticky = header.offsetTop;
  // menambahkan sticky navbar fixed
  function navSticky() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

    if (window.pageYOffset > 300) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  }
  



$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
      0:{
          items: 1,
          nav: false
      },
      600:{
          items: 2,
          nav: false
      },
      1000:{
          items: 3,
          nav: false
      },
      1100:{
        items: 4,
        nav: false
      }
  }
});

  
btnTop.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
});

let loc = location.href;
console.log(loc);


