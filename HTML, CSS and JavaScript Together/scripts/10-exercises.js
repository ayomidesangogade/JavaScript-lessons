console.log(
    document.querySelector(".js-button").classList.contains("js-button")
);

function handleButtons(className) {
    if (className === 'js-gaming-button') {
        document
            .querySelector(`.${className}`)
            .classList.add("is-toggled");
        document
            .querySelector('.js-music-button')
            .classList.remove("is-toggled");
        document
            .querySelector('.js-tech-button')
            .classList.remove("is-toggled");
    } else if (className === 'js-music-button') {
        document
            .querySelector(`.${className}`)
            .classList.add("is-toggled");
        document
            .querySelector('.js-gaming-button')
            .classList.remove("is-toggled");
        document
            .querySelector('.js-tech-button')
            .classList.remove("is-toggled");
    } else if (className === 'js-tech-button') {
        document
            .querySelector(`.${className}`)
            .classList.add("is-toggled");
        document
            .querySelector('.js-gaming-button')
            .classList.remove("is-toggled");
        document
            .querySelector('.js-music-button')
            .classList.remove("is-toggled");
    }
}