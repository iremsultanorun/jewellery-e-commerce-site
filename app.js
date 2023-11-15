
const pageOne = document.querySelector(".pageOne");

const sliders=document.querySelectorAll('.page')
let discoverButton = document.querySelector('.exploreButton');
document.addEventListener("DOMContentLoaded", function () {


  // for (let i = 0; i < 40; i++) {
  //   const snowflake = document.createElement("img");
  //   snowflake.className = "snowflake";
  //   snowflake.setAttribute("src", "snowflake.png");


  //   snowflake.style.left = Math.random() * 100 + "vw";
  //   snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

  //   pageOne.appendChild(snowflake);
  // }

});
let rightDiv = document.querySelector('.rightDiv')
for (let i = 0; i <= 45; i++) {
  let spans = document.createElement('span');

  rightDiv.appendChild(spans);
}

let nextslide = () => {
  let activeSlide = document.querySelector('.active');
  activeSlide.classList.remove('active');
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add('active');
    containerFirst.style.display='none'
  };
}; 

discoverButton.addEventListener('click', ()=>{
  nextslide();
});





