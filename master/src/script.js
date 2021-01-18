let titleAnimationRunning = false;
let globalTitleOpacity = 1;
const animationStartScrollHeight = 300;


const titleDisappearAnimation = () => {
    const scroll = window.scrollY;

    const getScrollRight = ( state ) => {
        if (state === "down") {
            return window.scrollY >= animationStartScrollHeight;
        } else {
            return window.scrollY < animationStartScrollHeight;
        }
    }

    const isAnimationFinished = (state, opacity ) => {
        if ("down" === state) {
            return opacity <= 0;
        } else {
            return opacity >= 1;
        }
    }

    let scrollType;
    let doesntAnimationNeedStart;
    let startOpacity;
    let stopOpacity;
    let opacityOperator;

    if (scroll >= animationStartScrollHeight) {
        scrollType = "down";
        doesntAnimationNeedStart = globalTitleOpacity === 0;
        startOpacity = 1.0;
        stopOpacity = "0";
        opacityOperator = -0.01;
    }
    else {
        scrollType = "up";
        doesntAnimationNeedStart = globalTitleOpacity === 1;
        startOpacity = 0;
        stopOpacity = "1";
        opacityOperator = 0.01;
    }

    let title = document.getElementById("title");

    if (!titleAnimationRunning) {
        if (doesntAnimationNeedStart) { return }
        let opacity = startOpacity;

        const frame = () => {
            if (getScrollRight(scrollType)) {
                if (isAnimationFinished(scrollType, opacity)) {
                    title.style.opacity = stopOpacity;
                    titleAnimationRunning = false;
                    globalTitleOpacity = parseInt(stopOpacity);
                    clearInterval(id);
                } else {
                    opacity += opacityOperator;
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


const topButtonControl = () => {
    const scroll = window.scrollY;
    const toTopButton = document.getElementById("2top")

    if (scroll >= animationStartScrollHeight) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none"
    }
}


window.onscroll = () => {
    titleDisappearAnimation();
    topButtonControl();
}
