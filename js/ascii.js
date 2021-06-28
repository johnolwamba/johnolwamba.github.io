/* jshint esversion: 6 */
"use strict";

window.onload = function () {

    const defaultAnimationSpeed = 250;
    const turboAnimationSpeed = 50;
    let timer;

    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation);
    document.getElementById("animation").addEventListener("change", changeAnimation);
    document.getElementById("fontsize").addEventListener("change", changeFontSize);
    document.getElementById("turbo").addEventListener("change", turboEffect);

    function startAnimation() {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("animation").disabled = true;
        clearInterval(timer);

        const animation = document.getElementById("animation").value;
        const isTurbo = document.getElementById("turbo").checked;
        const timeout = isTurbo ? turboAnimationSpeed : defaultAnimationSpeed;
        timer = createAnimationInterval(animation, timeout);
    }

    const createAnimationInterval = (animation, timeout) => {
        const frames = ANIMATIONS[animation].split("=====");
        let loopIndex = -1;
        return setInterval(function () {
            ++loopIndex;
            if (loopIndex >= frames.length) {
                loopIndex = 0;
            }
            document.getElementById("text-area").value = frames[loopIndex];
        }, timeout);
    };

    function stopAnimation() {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
        clearInterval(timer);
    }

    function changeAnimation() {
        const animation = document.getElementById("animation").value;
        document.getElementById("text-area").value = ANIMATIONS[animation];
    }

    function changeFontSize() {
        document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
    }

    function turboEffect() {
        if (document.getElementById("start").hasAttribute("disabled")) {
            clearInterval(timer);
            const animation = document.getElementById("animation").value;
            const timeout = this.checked ? turboAnimationSpeed : defaultAnimationSpeed;
            timer = createAnimationInterval(animation, timeout);
        }
    }
}
