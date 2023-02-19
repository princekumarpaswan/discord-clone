// side menu click

const Click = () => {
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.remove("hidden")
}

const button = document.getElementById("button").addEventListener("click", Click)