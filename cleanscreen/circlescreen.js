$(function () {
    $("#startButton").click(function () {
        let width = $("#widthInput").val();
        let growAmount = $("#growAmount").val();
        let growRate = $("#growRate").val();
        let numberCircles = $("#numberOfCircles").val();

        makeCircles(width, parseInt(numberCircles));
        growCircles(parseInt(growAmount), parseInt(growRate));
    });

    $("#circles").click(function () {
        $(".circle").remove();
    });
});

function makeCircles(width, circleCount) {
    let bgColors = ["#85c69f", "#d8508b", "#6c3349", "#af0054", "#bea51e", "#726e23", "#5b4654",
        "#da616a", "#16296e", "#edc1c8"]

    let circles = [];
    for (let i = 0; i < circleCount; i++) {
        let position = generateRandomInteger(100, 800);
        let bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

        let circle = $("<div>", {
            "class": "circle",
            "css": {
                "left": position + "px",
                "background-color": bgColor
            }
        });
        circles.push(circle);
    }

    $("#circles").append(circles);
}

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function growCircles(growAmount, growRate) {
    setInterval(function () {
        $(".circle").css({
            "width": function (idx, old) {
                return parseInt(old) + growAmount + "px";
            },
            "height": function (idx, old) {
                return parseInt(old) + growAmount + "px";
            }
        });
    }, growRate);
}