/*
File name: app.js
Student: Ken Fowler
StudentID: 301155972 
Date: 2021/05/27 
 */

(function () {
  function Start() {
    console.log("Application started!");

    let deleteButton = document.querySelectorAll(".btn-danger");
    for (const button of deleteButton) {
      button.addEventListener("click", (event) => {
        if (!confirm("Are you sure you want to delete this?")) {
          event.preventDefault();
          window.location.assign("/businesscontacts");
        }
      });
    }
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
