let Motor_2 = 0
let Motor_1 = 0
radio.setGroup(1)
basic.forever(function () {
    Motor_1 = 0
    Motor_2 = 0
    if (input.buttonIsPressed(Button.A) && (input.acceleration(Dimension.X) > -250 && input.acceleration(Dimension.X) < 250)) {
        Motor_1 = 1
        Motor_2 = 1
    } else {
        if (input.buttonIsPressed(Button.A) && input.acceleration(Dimension.X) >= 250) {
            Motor_1 = 1
        }
        if (input.buttonIsPressed(Button.A) && input.acceleration(Dimension.X) <= -250) {
            Motor_2 = 1
        }
    }
    if (input.buttonIsPressed(Button.B) && (input.acceleration(Dimension.X) > -250 && input.acceleration(Dimension.X) < 250)) {
        Motor_1 = -1
        Motor_2 = -1
    } else {
        if (input.buttonIsPressed(Button.B) && input.acceleration(Dimension.X) >= 250) {
            Motor_1 = -1
        }
        if (input.buttonIsPressed(Button.B) && input.acceleration(Dimension.X) <= -250) {
            Motor_2 = -1
        }
    }
    radio.sendValue("Motor_1", Motor_1)
    radio.sendValue("Motor_2", Motor_2)
})
