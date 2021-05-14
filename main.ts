let radar = 0
basic.forever(function () {
    radar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (radar > 13 && radar < 200) {
        cuteBot.motors(40, 40)
    }
    if (radar < 12 && radar > 10) {
        cuteBot.motors(20, 20)
    }
    if (radar < 6 && radar > 2) {
        cuteBot.motors(-40, -40)
    }
    if (radar > 7 && radar < 9) {
        cuteBot.motors(-20, -20)
    }
    if (radar == 10) {
        cuteBot.stopcar()
    }
})
