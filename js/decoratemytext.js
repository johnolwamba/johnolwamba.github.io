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
        const wholePage = document.getElementById("body");
        if (shouldBold) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";
            wholePage.style.backgroundImage = "url(../images/hundred-dollar-bill.jpg)";
        } else {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
            wholePage.style.backgroundImage = "none";
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

    const pigLatinButton = document.getElementById("pigLatinButton");
    const malkovitchButton = document.getElementById("malkovitchButton");

    pigLatinButton.onclick = convertToPigLatin;
    malkovitchButton.onclick = convertToMalkovitch;

    function convertToPigLatin() {
        const inputText = document.getElementById("inputTextArea").value;
        let trimmedText = inputText.trim();
        if (trimmedText !== "") {
            let firstChar = trimmedText.charAt(0);
            if (!isVowel(firstChar)) {
                trimmedText = trimmedText.substring(1, trimmedText.length) + firstChar + "ay";
            } else {
                trimmedText = trimmedText + "ay";
            }
            textArea.value = trimmedText;
        }
    }

    function isVowel(testChar) {
        let upperCasedChar = testChar.toUpperCase();
        return upperCasedChar === "A" || upperCasedChar === "E" ||
            upperCasedChar === "I" || upperCasedChar === "O" ||
            upperCasedChar === "U";
    }

    function convertToMalkovitch() {
        const inputText = document.getElementById("inputTextArea").value;
        let trimmedText = inputText.trim();
        const wordsArray = trimmedText.split(" ");
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].length >= 5) {
                wordsArray[i] = "Malkovich";
            }
        }
        let output = "";
        for (let i = 0; i < wordsArray.length; i++) {
            output = output + wordsArray[i] + " ";
        }
        document.getElementById("inputTextArea").value = output;
    }
};