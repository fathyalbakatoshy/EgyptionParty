var typed = new Typed('#element', {
  strings: ['Egyption Party','Egyption Party'],
  typeSpeed: 100,
  loop: true,
  showCursor: false,
  backSpeed: 50,

});

let openMenu = $(".icon");
let clossMenu = $(".close")

openMenu.on("click", function () { 
  $("#sidebar").animate({left:"0px"}, 1000)
})

clossMenu.on("click", function () {
  $("#sidebar").animate({left: -$(".menu").outerWidth()}, 1000)
})

// Start Duration Section


$("#duration h3").on('click', function (e) {
  $(e.target).next().slideToggle(1000)
  $("#duration h3 + p").not($(e.target).next()).slideUp(1000);
})


// Start Detials Section 
let countDownDate = new Date("2/26/2024").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.querySelector(".days").innerHTML = `${days} D`;
  document.querySelector(".hours").innerHTML = `${hours} H`;
  document.querySelector(".minutes").innerHTML = `${minutes} M`;
  document.querySelector(".seconds").innerHTML = `${seconds} S`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// Start footer Section 


$("textarea").on("input", function() {
  console.log();
  $("#chars").html(100 -$("textarea").val().length) ;
})


