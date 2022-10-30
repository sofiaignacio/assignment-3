scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite2, location2) {
    game.over(true, effects.hearts)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f f . . 
    . . . f f f f f f f f f f f . . 
    . . . f f e e e e e e e f f . . 
    . . . f f e e e e e e e f f . . 
    . . . f f e e e e e e e f f . . 
    . . . f f e e e e e e e f f . . 
    . . . f f e e e e e e e f f . . 
    . . . f f e e e e e e e f f . . 
    . . . f f e e e e e e e f f . . 
    . . . f f f f f f f f f f f . . 
    . . . f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(8)
