const smallMenuButton = document.querySelector("#smallMenuButton");
const navContainer = document.querySelector("#navContainer");

smallMenuButton.addEventListener("click", () => {
    navContainer.classList.toggle("open");
})