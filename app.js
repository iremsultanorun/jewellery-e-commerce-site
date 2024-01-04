//! Main  Page 
const pageOne = document.querySelector(".pageOne");
let pageTwo = document.querySelector('.pageTwo')
const sliders = document.querySelectorAll('.page')
let discoverButton = document.querySelector('.exploreButton');

// ? Snowflakes

document.addEventListener("DOMContentLoaded", function () {
  pageTwo.style.display = 'none'

  for (let i = 0; i < 40; i++) {
    const snowflake = document.createElement("img");
    snowflake.className = "snowflake";
    snowflake.setAttribute("src", "images/snowflake.png");


    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

    pageOne.appendChild(snowflake);
  }

});

// ? Spans

let rightDiv = document.querySelector('.rightDiv')
for (let i = 0; i <= 45; i++) {
  let spans = document.createElement('span');
  rightDiv.appendChild(spans);
}

//* slide

let nextSlidePages = () => {
  pageTwo.style.display = 'block'
  let activeSlide = document.querySelector('.active');
  activeSlide.classList.remove('active');
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add('active');
    pageOne.style.display = 'none'
  };
};

discoverButton.addEventListener('click', () => {
  nextSlidePages();
});


//! E-commerce  Page 


// const slidesCard = document.querySelectorAll('.reklamkarti');
// let rightChevron = document.querySelector(".rightChevron");
// let leftChevron = document.querySelector(".leftChevron");

// let nextSlideAdvertisingCards = () => {
//   const activeSlideCard = document.querySelector('.activee');
//   activeSlideCard.classList.remove('activee');
//   if (activeSlideCard.nextElementSibling) {
//     activeSlideCard.nextElementSibling.classList.add('activee');
//   } else {
//     slidesCard[0].classList.add('activee');
//   }
// };

// let prevSlideAdvertisingCards = () => {
//   const activeSlideCard = document.querySelector('.activee');
//   activeSlideCard.classList.remove('activee');
//   if (activeSlideCard.previousElementSibling) {
//     activeSlideCard.previousElementSibling.classList.add('activee');


//   } else {
//     slidesCard[slidesCard.length - 1].classList.add('activee');
//   }
// };

// rightChevron.addEventListener('click', () => {
//   nextSlideAdvertisingCards();
// });

// leftChevron.addEventListener('click', () => {
//   prevSlideAdvertisingCards();
// });

// let soruicon = document.querySelectorAll(".fa-angle-down");
// let carddbottom = document.querySelectorAll(".carddbottom");

// soruicon.forEach((icon, index) => {
//   icon.addEventListener('click', () => {
//     // Tıklanan ikona ait carddbottom öğesini bul
//     let clickedCarddbottom = carddbottom[index];

//     // carddbottom'ın mevcut durumunu kontrol et ve tersine çevir
//     if (clickedCarddbottom.style.display === 'block') {
//       clickedCarddbottom.style.display = 'none';
//     } else {
//       clickedCarddbottom.style.display = 'block';
//     }
//   });
// });



let userIcons = document.querySelectorAll('.userIcon');
let loginBoxes = document.querySelectorAll('.loginBox');
let shoppingBags = document.querySelectorAll('.shoppingBag');
let shoppingBoxes = document.querySelectorAll('.shoppingBox');

let bars = document.querySelector('.bars');
let optionsBox = document.querySelector('.optionsBox');

let filterIcon = document.querySelector('.filterIcon');
let filter = document.querySelector('.filter');
let sortingIcon = document.querySelector('.sortingIcon');
let sorting = document.querySelector('.sorting');

let soruicon = document.querySelectorAll(".fa-angle-down");
let carddbottom = document.querySelectorAll(".carddbottom");
let signupButtons = document.querySelectorAll('.signupButton');
let loginAndSignupBoxes = document.querySelectorAll('.loginAndSignupBox');
let loginSectionIcons = document.querySelectorAll('.loginSectionIcon');
let closeSections = document.querySelectorAll('.closeSection');
let imgs1 = document.querySelectorAll('.div1 img');
let imgs2 = document.querySelectorAll('.div2 img');
let imgs3 = document.querySelectorAll('.div3 img');
let tikla = document.querySelector('.tikla');

tikla.addEventListener('click', () => {
  let dur = setInterval(function () {


    imgs1.forEach(img => {
      img.classList.remove('block');
    });
      let randomIndex1 = Math.floor(Math.random() * imgs1.length);
      let selectedImage1 = imgs1[randomIndex1];
      selectedImage1.classList.add('block');
      let selectedImageClass1 = selectedImage1.className;
      console.log(selectedImageClass1);


   
    imgs2.forEach(img => {
      img.classList.remove('block');
    });
    let randomIndex2 = Math.floor(Math.random() * imgs2.length);
    let selectedImage2 = imgs2[randomIndex2];
    selectedImage2.classList.add('block');
    let selectedImageClass2 = selectedImage2.className;
    console.log(selectedImageClass2);

    imgs3.forEach(img => {
      img.classList.remove('block');
    });
    let randomIndex3 = Math.floor(Math.random() * imgs3.length);
    let selectedImage3 = imgs3[randomIndex3];
    selectedImage3.classList.add('block');
    let selectedImageClass3 = selectedImage3.className;
    console.log(selectedImageClass3)

 checkLuck(selectedImageClass1, selectedImageClass2, selectedImageClass3);
  }, 2000);
  setTimeout(function () {
    clearInterval(dur);
  }, 2000);
});



function checkLuck(class1, class2, class3) {
  if (class1 === class2 && class2 === class3) {
    // console.log('100% şanslısın!');
    tikla.textContent='100% şanslısın!';
  } else if (class1 === class2 || class1 === class3 || class2 === class3) {
    // console.log('%50 şanslısın!');
      tikla.textContent='%50 şanslısın!';
  } else {
    // console.log('Şanssız geçtin :(');
       tikla.textContent='Şanssız geçtin :(';
  }
}












signupButtons.forEach(signupButton => {
  signupButton.addEventListener('click', () => {
    loginAndSignupBoxes.forEach(loginAndSignupBox => {
      loginAndSignupBox.style.transform = 'rotateY(180deg)'
    });
  });
});
loginSectionIcons.forEach(loginSectionIcon => {
  loginSectionIcon.addEventListener('click', () => {
    loginAndSignupBoxes.forEach(loginAndSignupBox => {
      loginAndSignupBox.style.transform = 'rotateY(360deg)'
    });
  });
});
closeSections.forEach(closeSection => {
  closeSection.addEventListener('click', () => {
    loginAndSignupBoxes.forEach(loginAndSignupBox => {
      loginAndSignupBox.style.display = 'none'
    });
  });
});
soruicon.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    // Tıklanan ikona ait carddbottom öğesini bul
    let clickedCarddbottom = carddbottom[index];

    // carddbottom'ın mevcut durumunu kontrol et ve tersine çevir
    if (clickedCarddbottom.style.display === 'block') {
      clickedCarddbottom.style.display = 'none';
    } else {
      clickedCarddbottom.style.display = 'block';
    }
  });
});


function toggleDisplay(element) {
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}


filterIcon.addEventListener('click', () => {
  toggleDisplay(filter);
});

sortingIcon.addEventListener('click', () => {
  toggleDisplay(sorting);
});

bars.addEventListener('click', () => {
  toggleDisplay(optionsBox)
});

userIcons.forEach(userIcon => {
  userIcon.addEventListener('click', () => {
    loginAndSignupBoxes.forEach(loginAndSignupBox => {
      toggleDisplay(loginAndSignupBox);
    });
  });
});

shoppingBags.forEach(shoppingBag => {
  shoppingBag.addEventListener('click', () => {
    shoppingBoxes.forEach(shoppingbox => {
      toggleDisplay(shoppingbox);
    });
  });
});

