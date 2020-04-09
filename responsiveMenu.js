let rMenu = false;
document.querySelector(".menu_icon").addEventListener("touchstart", function() {
    let root = document.querySelector(":root");
    let rootStyle = getComputedStyle(root);
    let h = rootStyle.getPropertyValue("--navHeight");
    console.log(h);
    rMenu = !rMenu;
    let height = (rMenu) ? `calc(${h} * 2)` : `${h}`;
    document.querySelector(".responsive_menu").style.height = height;
});