input.onPinPressed(TouchPin.P0, function () {
    y = 0
    x = 4
    while (y <= 4) {
        basic.pause(200)
        led.plot(x, y)
        y += 1
        x += -1
    }
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    number = 5
    while (number >= 0) {
        basic.showNumber(number)
        number += -1
    }
    music.playMelody("E F E D G F E F ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
})
let number = 0
let x = 0
let y = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
    }
})
