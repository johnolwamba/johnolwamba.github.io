/* jshint esversion: 6*/
// "use strict";

// alert("Hello world"); ====> First task

window.onload = function () {
    "use strict";

    /* Pick button and make it update textarea font size */
    const clickedButton = document.getElementById("decoButton");
    // clickedButton.onclick = changeFontOfTextArea;
    clickedButton.onclick = updateTimerAtInterval;

    // textarea
    const textArea = document.getElementById("inputTextArea");

    function makeAlertCall() { // display an alert
        alert("Hello World!");
    }

    function changeFontOfTextArea() { /*changing font size of textarea text*/
        textArea.style.fontSize = "24pt";
    }

    /* Pick checkbox and alert onchange */
    const checkBox = document.getElementById("checkBox");
    // checkBox.onchange = makeAlertCall;
    checkBox.onchange = checkIfCheckBoxIsOn;

    /* update font weight of textarea onchange of checkbox */
    function changeStyleOfTextArea(shouldBold) {
        if (shouldBold) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
        } else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
        }
    }

    //detect checkbox change
    function checkIfCheckBoxIsOn() {
        changeStyleOfTextArea(checkBox.checked);
    }

    // Using a timer
    let timer = null;

    function updateTimerAtInterval() {
        if (timer === null) {
            timer = setInterval(incrementFontSize, 500);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    //increment font size by 2
    function incrementFontSize() {
        let prevFont = window.getComputedStyle(textArea, null).getPropertyValue("font-size");
        textArea.style.fontSize = parseInt(prevFont) + 2 + "pt";
    }
};