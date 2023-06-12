let conductividad = 0
input.onButtonPressed(Button.A, function () {
    conductividad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(conductividad)
    radio.sendNumber(conductividad)
})
basic.forever(function () {
    radio.setGroup(1973)
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        led.setBrightness(255)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        led.setBrightness(0)
    }
})
