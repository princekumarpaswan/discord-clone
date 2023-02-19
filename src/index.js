// side menu click

const Click = () => {
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.remove("hidden")
}

const ClickSide = () => {
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.add("hidden")
}

const button = document.getElementById("button").addEventListener("click", Click)
const crossbtn = document.getElementById("crossbtn").addEventListener("click", ClickSide)