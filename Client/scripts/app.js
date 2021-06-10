"use strict";
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