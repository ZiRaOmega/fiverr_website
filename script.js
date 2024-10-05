document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var button = document.querySelector("svg");
    var line = document.querySelector("line");

    var nav = document.querySelector("nav");

    button.addEventListener("click", function () {
        if (body.classList.contains("menu-open")) {
            body.classList.remove("menu-open");
            nav.style.display = "none";
            console.log(nav.style.display)
            return;
        }
        body.classList.add("menu-open");
        nav.style.display = "flex";
    });
});
