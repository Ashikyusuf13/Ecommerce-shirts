//select navbar-bar, side-navbar-button
var navbarButton = document.getElementById("navbar-button")
var sideNavbarX = document.getElementById("side-navbar-x")

function showbar()
{
    sideNavbarX.style.left="0";
}
function closebar()
{
    sideNavbarX.style.left="-50%";
}
