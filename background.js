const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `img/${imgNumber}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);
}

function genNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number + 1;
}

function init() {
    const randomNumber = genNumber();
    paintImage(randomNumber);
}

init();