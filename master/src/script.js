let titleAnimationRunning = false;
let globalTitleOpacity = 1;
const animationStartScrollHeight = 300;


const titleAnimation = () => {
    const scroll = window.scrollY;

    const getScrollRight = (state) => {
        if (state === "down") {
            return window.scrollY >= animationStartScrollHeight;
        } else {
            return window.scrollY < animationStartScrollHeight;
        }
    }

    const getAnimationFinished = (state, opacity) => {
        if ("down" === state) {
            return opacity <= 0;
        } else {
            return opacity >= 1;
        }
    }

    let type;
    let globalOpacityEquation;
    let startOpacity;
    let stopOpacity;
    let mathOpacity;

    if (scroll >= animationStartScrollHeight) {
        type = "down";
        globalOpacityEquation = globalTitleOpacity === 0;
        startOpacity = 1.0;
        stopOpacity = "0";
        mathOpacity = -0.01;
    } else {
        type = "up";
        globalOpacityEquation = globalTitleOpacity === 1;
        startOpacity = 0;
        stopOpacity = "1";
        mathOpacity = 0.01;
    }

    let title = document.getElementById("title");

    if (!titleAnimationRunning) {
        if (globalOpacityEquation) { return }
        let opacity = startOpacity;

        const frame = () => {
            if (getScrollRight(type)) {
                if (getAnimationFinished(type, opacity)) {
                    title.style.opacity = stopOpacity;
                    titleAnimationRunning = false;
                    globalTitleOpacity = parseInt(stopOpacity);
                    clearInterval(id);
                } else {
                    opacity += mathOpacity;
                    title.style.opacity = opacity;
                }
            } else {
                title.style.opacity = stopOpacity;
                titleAnimationRunning = false;
                globalTitleOpacity = stopOpacity;
                clearInterval(id);
            }
        }

        titleAnimationRunning = true;
        const id = setInterval(frame, 10);
    }
}


window.onscroll = () => {
    titleAnimation();
}
