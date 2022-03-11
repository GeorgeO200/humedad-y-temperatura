input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempmax)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tempmin)
    basic.pause(2000)
    basic.clearScreen()
})
let tempmin = 0
let tempmax = 0
let tempactual = input.temperature()
tempmax = tempactual
tempmin = tempactual
basic.forever(function () {
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(tempactual)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . . . .
        . . # # #
        . . # . .
        . . # . .
        . . # # #
        `)
    tempactual = input.temperature()
    if (tempactual < tempmin) {
        tempmin = tempactual
    }
    if (tempactual > tempmax) {
        tempmax = tempactual
    }
    basic.pause(1000)
    basic.clearScreen()
})
