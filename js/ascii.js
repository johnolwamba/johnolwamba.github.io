/* jshint esversion: 6 */
"use strict";

window.onload = function () {

    const defaultAnimationSpeed = 250;
    let timer;

    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation);
    document.getElementById("animation").addEventListener("change", changeAnimation);
    document.getElementById("fontsize").addEventListener("change", changeFontSize);
    document.getElementById("turbo").addEventListener("change", turboEffect);

    function startAnimation() {
        clearInterval(timer);
        const animation = document.getElementById("animation").value;

        timer = createAnimation(animation, defaultAnimationSpeed);
    }

    // const createAnimation = (animation, defaultAnimationSpeed) {
    //     return undefined;
    // }

    function stopAnimation() {

    }

    function changeAnimation() {
        const animation = document.getElementById("animation").value;
        document.getElementById("text-area").value = ANIMATIONS[animation];
    }

    function changeFontSize() {
        document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
    }

    function turboEffect() {

    }
}
