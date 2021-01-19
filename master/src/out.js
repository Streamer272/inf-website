let titleAnimationRunning = false;
let globalTitleOpacity = 1;
const animationStartScrollHeight = 200;


const disappearAnimationRun = ( 
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

// dont forget to set globalAnimationRunning to true on start!
const disappearAnimation = (
    endCallBack, // set global opacity and animation running to some value
    globalAnimationRunning,
    globalElementOpacity,
    reverseY
    ) => {

    // state declaration
    let state;
    if ((window.scrollY >= animationStartScrollHeight && !reverseY) || (window.scrollY < animationStartScrollHeight && reverseY)) {
        state = "down";
    }
    else {
        state = "up"
    }

    // is animation already running
    if (globalAnimationRunning) {
        return;
    }

    // is animation already finished on animation start
    if ("down" === state) {
        if (globalElementOpacity === 0) {
            return;
        }
    }
    else {
        if (globalElementOpacity === 1) {
            return;
        }
    }

    // is scroll right function
    let canAnimationContinueByState;
    if (("down" === state && !reverseY) || ("up" === state && reverseY)) {
        canAnimationContinueByState = () => {
            return window.scrollY >= animationStartScrollHeight;
        }
    }
    else {
        canAnimationContinueByState = () => {
            return window.scrollY < animationStartScrollHeight;
        }
    }

    // is animation finished check function
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

    // start and stop opacity declaration
    let startOpacity, stopOpacity;
    if ("down" === state) {
        startOpacity = 1;
        stopOpacity = 0;
    }
    else {
        startOpacity = 0;
        stopOpacity = 1;
    }

    // opacity operator declaration
    let opacityOperator;
    if ("down" === state) {
        opacityOperator = -0.01
    }
    else {
        opacityOperator = 0.01
    }

    // animation start
    disappearAnimation(
        canAnimationContinueByState,
        isAnimationFinished,
        startOpacity,
        stopOpacity,
        opacityOperator,
        "title",
        endCallBack
    )
}


const startTitleAnimation = () => {
    const callback = ( opacity, animationRunning ) => {
        globalTitleOpacity = opacity;
        globalTitleAnimationRunning = animationRunning;
    }

    disappearAnimation(
        callback,
        globalTitleAnimationRunning,
        globalTitleOpacity,
        false
    )
}