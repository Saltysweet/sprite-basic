input.onButtonPressed(Button.A, function () {
    xpos += -1
    basic.clearScreen()
    led.plot(xpos, ypos)
    if (xpos < 0) {
        xpos = 0
        basic.clearScreen()
        led.plot(xpos, ypos)
    }
})
input.onButtonPressed(Button.AB, function () {
    ypos += -1
    basic.clearScreen()
    led.plot(xpos, ypos)
    if (xpos < 0) {
        xpos = 0
        basic.clearScreen()
        led.plot(xpos, ypos)
    }
})
input.onButtonPressed(Button.B, function () {
    xpos += 1
    basic.clearScreen()
    led.plot(xpos, ypos)
    if (xpos > 4) {
        xpos = 4
        basic.clearScreen()
        led.plot(xpos, ypos)
    }
})
input.onGesture(Gesture.Shake, function () {
    ypos += 1
    basic.clearScreen()
    led.plot(xpos, ypos)
    if (xpos < 0) {
        xpos = 0
        basic.clearScreen()
        led.plot(xpos, ypos)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    ypos = 4
    basic.clearScreen()
    led.plot(xpos, ypos)
})
let xpos = 0
let ypos = 0
ypos = 4
xpos = 2
led.plot(xpos, ypos)
