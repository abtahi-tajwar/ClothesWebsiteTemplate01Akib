let contentHolder = document.querySelector(".content_holder");
let firstText = document.querySelector(".content_holder p:nth-child(1)");
let secondText = document.querySelector(".content_holder div:nth-child(2)");

contentHolder.onmouseout = function() {() => {
    firstText.style.setProperty("animation", "contentfText .5s ease-in-out");
    firstText.style.setProperty("animation-direction", "reverse");
}}