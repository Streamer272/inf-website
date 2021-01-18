let titleAnimationRunning = false;
let oldScroll = 0;
let globalOpacity = 1;

window.onscroll = () => {
    const scroll = window.scrollY;

    if (scroll >= 150) {
        let title = document.getElementById("title");

        if (!titleAnimationRunning) {
            if (globalOpacity === 0) { return }
            let opacity = 1.0;

            const frame = () => {
                if (window.scrollY >= 150) {
                    if (opacity <= 0) {
                        title.style.opacity = "0";
                        titleAnimationRunning = false;
                        globalOpacity = 0;
                        clearInterval(id);
                    } else {
                        opacity -= 0.01;
                        title.style.opacity = opacity;
                    }
                } else {
                    title.style.opacity = "0";
                    titleAnimationRunning = false;
                    globalOpacity = 0;
                    clearInterval(id);
                }
            }

            titleAnimationRunning = true;
            const id = setInterval(frame, 10);
        }

    } else {
        let title = document.getElementById("title");

        if (!titleAnimationRunning) {
            if (globalOpacity === 1) { return }
            let opacity = 0;

            const frame = () => {
                if (window.scrollY < 150) {
                    if (opacity >= 1) {
                        title.style.opacity = "1";
                        titleAnimationRunning = false;
                        globalOpacity = 1;
                        clearInterval(id);
                    } else {
                        opacity += 0.01;
                        title.style.opacity = opacity;
                    }
                } else {
                    title.style.opacity = "1";
                    titleAnimationRunning = false;
                    globalOpacity = 1;
                    clearInterval(id);
                }
            }

            titleAnimationRunning = true;
            const id = setInterval(frame, 10);
        }
    }

    oldScroll = scroll;
}
