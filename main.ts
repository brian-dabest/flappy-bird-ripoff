namespace SpriteKind {
    export const pipe = SpriteKind.create()
    export const toppipe = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
    mySprite.ay = acceleration
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pipe, function (sprite, otherSprite) {
    game.gameOver(false)
})
let pipe: Sprite = null
let acceleration = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`flappy bird`, SpriteKind.Player)
mySprite.setPosition(20, 55)
mySprite.setStayInScreen(true)
acceleration = 500
let pipespawn = 5005
let pipespeed = -40
info.setScore(0)
scene.setBackgroundImage(assets.image`BACKGROUND`)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
100,
true
)
game.onUpdateInterval(pipespawn, function () {
    info.changeScoreBy(1)
    pipe = sprites.create(assets.image`myImage`, SpriteKind.pipe)
    pipe.setPosition(200, randint(48, 75))
    pipe.setVelocity(pipespeed, 0)
})
game.onUpdateInterval(30000, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.pipe)
    pipespawn += -5
})
game.onUpdateInterval(30000, function () {
    pipespeed += -5
})
