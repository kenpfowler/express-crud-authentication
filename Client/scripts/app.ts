/*
File name: app.js
Student: Ken Fowler
StudentID: 301155972 
Date: 2021/05/27 
 */

(function () {
  function Start() {
    console.log("Application started!");
  }
  //when the window loads we will run the start function
  window.addEventListener("load", Start);
})();

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    (<HTMLElement>document.querySelector(".fixed-bottom")).style.display =
      "none";
  } else {
    (<HTMLElement>document.querySelector(".fixed-bottom")).style.display =
      "flex";
  }
};

window.ontouchmove = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    (<HTMLElement>document.querySelector(".fixed-bottom")).style.display =
      "none";
  } else {
    (<HTMLElement>document.querySelector(".fixed-bottom")).style.display =
      "flex";
  }
};
