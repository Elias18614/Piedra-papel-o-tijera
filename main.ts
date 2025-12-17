let Gesto = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    Gesto = randint(1, 3)
    if (Gesto == 1) {
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # . .
            . # . # #
            # . . # #
            `)
    } else if (Gesto == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Gesto == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    Gesto = randint(1, 3)
})
