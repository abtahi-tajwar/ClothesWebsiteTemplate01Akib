var forBlur = 114 - window.innerHeight;
document.querySelector(".blurrred_background").style.transform = "translate(-30%, "+forBlur+"px)"

let rMenu = false;
document.querySelector(".menu_icon").addEventListener("touchstart", function() {
    console.log("Clicked");
    rMenu = !rMenu;
    let height = (rMenu) ? "14vw" : "7vw";
    document.querySelector(".responsive_menu").style.height = height;
});