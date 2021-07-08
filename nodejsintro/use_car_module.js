function useCar() {
    const myCar = require("./my_car");
    myCar.drive();
    myCar.turn(80);
    myCar.break();
}

useCar();