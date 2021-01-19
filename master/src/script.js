let titleAnimationRunning = false;
let globalTitleOpacity = 1;
const animationStartScrollHeight = 200;


const disappearAnimation = ( 
    isScrollRight,
    isAnimationFinished,
    startOpacity,
    stopOpacity,
    opacityOperator,
    elementId,
    endCallback
    ) => {
    const element = document.getElementById(elementId);

    let opacity = startOpacity;

    const frame = () => {
        if (isScrollRight()) {
            if (isAnimationFinished(opacity)) {
                element.style.opacity = stopOpacity;
                endCallback(parseInt(stopOpacity), false);
                clearInterval(intervalID);
            } else {
                opacity += opacityOperator;
                element.style.opacity = opacity;
            }
        } else {
            element.style.opacity = stopOpacity;
            endCallback(parseInt(stopOpacity), false);
            clearInterval(intervalID);
        }
    }

    const intervalID = setInterval(frame, 10);
}


const startTitleAnimation = () => {
    if (titleAnimationRunning) {
        return;
    }

    let state;
    if (window.scrollY >= animationStartScrollHeight) {
        state = "down";
    }
    else {
        state = "up"
    }

    // is scroll right
    let isStateSame;
    if ("down" === state) {
        isStateSame = () => {
            return window.scrollY >= animationStartScrollHeight;
        }
    }
    else {
        isStateSame = () => {
            return window.scrollY < animationStartScrollHeight;
        }
    }

    // when is animation finished
    let isAnimationFinished;
    if ("down" === state) {
        isAnimationFinished = ( opacity ) => {
            return opacity <= 0;
        }
    }
    else {
        isAnimationFinished = ( opacity ) => {
            return opacity >= 1;
        }
    }

    // is animation finished
    if ("down" === state) {
        if (globalTitleOpacity === 0) {
            return;
        }
    }
    else {
        if (globalTitleOpacity === 1) {
            return;
        }
    }

    // start and stop opacity
    let startOpacity, stopOpacity;
    if ("down" === state) {
        startOpacity = 1;
        stopOpacity = 0;
    }
    else {
        startOpacity = 0;
        stopOpacity = 1;
    }

    // opacity operator
    let opacityOperator;
    if ("down" === state) {
        opacityOperator = -0.01
    }
    else {
        opacityOperator = 0.01
    }

    let endCallBack;
    endCallBack = ( endOpacity, endAnimationRunning ) => {
        titleAnimationRunning = endAnimationRunning;
        globalTitleOpacity = endOpacity;
    }

    titleAnimationRunning = true;
    disappearAnimation(
        isStateSame,
        isAnimationFinished,
        startOpacity,
        stopOpacity,
        opacityOperator,
        "title",
        endCallBack
    )
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
    startTitleAnimation();
    topButtonControl();
}
