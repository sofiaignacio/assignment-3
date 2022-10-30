def on_hit_wall(sprite, location):
    game.over(False)
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_overlap_tile(sprite2, location2):
    game.over(True, effects.hearts)
scene.on_overlap_tile(SpriteKind.player,
    sprites.castle.tile_dark_grass3,
    on_overlap_tile)

mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
tiles.set_current_tilemap(tilemap("""
    level2
"""))
tiles.place_on_random_tile(mySprite, sprites.castle.tile_dark_grass2)
scene.camera_follow_sprite(mySprite)
info.start_countdown(8)