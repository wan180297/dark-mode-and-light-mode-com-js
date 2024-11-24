const buttonDarkMode = document.querySelector(".dark-mode-button");

function darkMode(e) {
    e.preventDefault();
    const bodyModeLigth = document.querySelector("body");
    const headImg = document.querySelector(".alterar-img");
    const imgDarkButton = document.querySelector("img");
    const borderContent = document.querySelectorAll(".content");

    bodyModeLigth.classList.toggle("dark-mode");
    headImg.href = "lua.png"
    
    if(bodyModeLigth.classList.contains("dark-mode")) {
        imgDarkButton.src = "lua.png"
        borderContent.forEach(item => {
            item.style.borderRight= "1px solid white"
        })
    } else {
        imgDarkButton.src = "icons8-sol-16.png"
        headImg.href = "icons8-sol-16.png"
        borderContent.forEach(item => {
            item.style.borderRight= "1px solid black"
        })
    }
    
    borderContent.forEach((item, index) => {
        index === borderContent.length - 1 ? item.style.borderRight = "none" : borderContent
    })
}

buttonDarkMode.addEventListener("click", darkMode);