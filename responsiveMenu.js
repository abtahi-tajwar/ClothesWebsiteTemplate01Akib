let rMenu = false;
document.querySelector(".menu_icon").addEventListener("touchstart", function() {
    console.log("Clicked");
    rMenu = !rMenu;
    let height = (rMenu) ? "18vw" : "9vw";
    document.querySelector(".responsive_menu").style.height = height;
});