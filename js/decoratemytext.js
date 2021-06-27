/* jshint esversion: 6*/
// "use strict";

// alert("Hello world"); ====> First task

window.onload = function () {
    "use strict";

    /* Pick button and make it update textarea font size */
    const clickedButton = document.getElementById("decoButton");
    clickedButton.onclick = changeFontOfTextArea;

    function makeAlertCall() { // display an alert
        alert("Hello World!");
    }

    function changeFontOfTextArea() { /*changing font size of textarea text*/
        const textArea = document.getElementById("inputTextArea");
        textArea.style.fontSize = "24pt";
    }

    /* Pick checkbox and alert onchange */
    const checkBox = document.getElementById("checkBox");
    checkBox.onchange = makeAlertCall;

};