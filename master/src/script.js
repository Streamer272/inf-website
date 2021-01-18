let titleAnimationRunning = false;
let globalOpacity = 1;


const titleAnimation = () => {
    const scroll = window.scrollY;

    const getScrollRight = (state) => {
        if (state === "down") {
            return window.scrollY >= 150;
        } else {
            return window.scrollY < 150;
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

    if (scroll >= 150) {
        type = "down";
        globalOpacityEquation = globalOpacity === 0;
        startOpacity = 1.0;
        stopOpacity = "0";
        mathOpacity = -0.01;
    } else {
        type = "up";
        globalOpacityEquation = globalOpacity === 1;
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
                    globalOpacity = parseInt(stopOpacity);
                    clearInterval(id);
                } else {
                    opacity += mathOpacity;
                    title.style.opacity = opacity;
                }
            } else {
                title.style.opacity = stopOpacity;
                titleAnimationRunning = false;
                globalOpacity = stopOpacity;
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
