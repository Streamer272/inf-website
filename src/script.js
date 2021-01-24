let globalTitleAnimationRunning = false;
let globalTitleOpacity = 1;
let globalTopButtonAnimationRunning = false;
let globalTopButtonOpacity = 1;
const animationStartScrollHeight = 300;
const baseFPS = 120;


const fpsToOperator = ( fps ) => {
    return fps ** -1;
}

const fpsToTime = ( fps ) => {
    return 1000 / fps;
}


const disappearAnimationRun = ( 
    isScrollRight,
    isAnimationFinished,
    startOpacity,
    stopOpacity,
    opacityOperator,
    elementId,
    endCallback,
    between_frame_time
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

    const intervalID = setInterval(frame, between_frame_time);
}

// dont forget to set globalAnimationRunning to true on start!
const disappearAnimation = (
    elementId,
    finishAnimationCallback, // set global opacity and animation running to some value
    globalElementOpacity,
    reverseY,
    fps
    ) => {

    // state declaration
    let state;
    if ((window.scrollY >= animationStartScrollHeight && !reverseY) || (window.scrollY < animationStartScrollHeight && reverseY)) {
        state = "down";
    }
    else {
        state = "up"
    }

    // is animation already finished on animation start
    if ("down" === state) {
        if (globalElementOpacity === 0) {
            finishAnimationCallback( 0, false )
            return;
        }
    }
    else {
        if (globalElementOpacity === 1) {
            finishAnimationCallback( 1, false )
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
        opacityOperator = -fpsToOperator(fps);
    }
    else {
        opacityOperator = fpsToOperator(fps);
    }

    // animation start
    disappearAnimationRun(
        canAnimationContinueByState,
        isAnimationFinished,
        startOpacity,
        stopOpacity,
        opacityOperator,
        elementId,
        finishAnimationCallback,
        fpsToTime(fps)
    )
}


const startTitleAnimation = () => {
    const callback = ( opacity, animationRunning ) => {
        globalTitleOpacity = opacity;
        globalTitleAnimationRunning = animationRunning;
    }

    if (!globalTitleAnimationRunning) {
        globalTitleAnimationRunning = true;
        disappearAnimation(
            "title",
            callback,
            globalTitleOpacity,
            false,
            baseFPS
        )
    }
}


const startTopButtonAnimation = () => {
    const callback = ( opacity, animationRunning ) => {
        globalTopButtonOpacity = opacity;
        globalTopButtonAnimationRunning = animationRunning;
    }

    if (!globalTopButtonAnimationRunning) {
        globalTopButtonAnimationRunning = true;
        disappearAnimation(
            "2top",
            callback,
            globalTopButtonOpacity,
            true,
            baseFPS
        )
    }
}


window.onscroll = () => {
    startTitleAnimation();
    startTopButtonAnimation();
}
