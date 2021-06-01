"use strict";
(function () {
    function Start() {
        console.log("Application started!");
    }
    window.addEventListener("load", Start);
})();
window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector(".fixed-bottom").style.zIndex = "-1";
    }
    else {
        document.querySelector(".fixed-bottom").style.zIndex = "10";
    }
};
//# sourceMappingURL=app.js.map