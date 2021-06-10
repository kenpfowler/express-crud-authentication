"use strict";
(function () {
    function Start() {
        console.log("Application started!");
    }
    window.addEventListener("load", Start);
})();
window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector(".fixed-bottom").style.display =
            "none";
    }
    else {
        document.querySelector(".fixed-bottom").style.display =
            "flex";
    }
};
window.ontouchmove = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector(".fixed-bottom").style.display =
            "none";
    }
    else {
        document.querySelector(".fixed-bottom").style.display =
            "flex";
    }
};
//# sourceMappingURL=app.js.map