/* jshint esversion: 6*/
// "use strict";

// alert("Hello world"); ====> First task

window.onload = function () {
    "use strict";

    const clickedButton = document.getElementById("decoButton");
    clickedButton.onclick = makeAlertCall;

    function makeAlertCall() {
        alert("Hello World!");
    }
};