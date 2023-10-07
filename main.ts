function Start () {
    Pac_man = game.createSprite(0, 0)
    ghost = game.createSprite(2, 2)
    score = 0
    while (true) {
        if (input.acceleration(Dimension.X) > 200) {
            Pac_man.change(LedSpriteProperty.X, 1)
        }
        if (input.acceleration(Dimension.X) < -200) {
            Pac_man.change(LedSpriteProperty.X, -1)
        }
        if (input.acceleration(Dimension.Y) > -200) {
            Pac_man.change(LedSpriteProperty.Y, -1)
        }
        if (input.acceleration(Dimension.Y) < 200) {
            Pac_man.change(LedSpriteProperty.Y, 1)
        }
        basic.pause(100)
    }
}
let score = 0
let ghost: game.LedSprite = null
let Pac_man: game.LedSprite = null
basic.showIcon(IconNames.Ghost)
basic.pause(100)
Start()
