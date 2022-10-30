// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001020202020202020202020202020203060909090909090909090909090909070609090909090909090909090909090706090909090909090909090909090907060a0a0a0a0a0a0a0a09090909090907060a0a0a0a0a0a0a0a09090909090907060a0a0909090a0a0a09090909090907060a0a0909090a0a0a09090a0a0a0a0b060a0a0909090a0a0a09090a0a0a0a0d060a0a0909090a0a0a09090a0a0a0907060a0a0909090a0a0a09090a0a0a0907060a0a0909090a0a0a09090a0a0a0907060a0a0909090a0a0a09090a0a0a09070c0a0a0909090a0a0a0a0a0a0a0a09070c0a0a0909090a0a0a0a0a0a0a0a090704080808080808080808080808080805`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 2 2 2 2 
2 . . 2 2 2 . . . 2 2 2 2 2 2 2 
2 . . 2 2 2 . . . 2 2 . . . . . 
2 . . 2 2 2 . . . 2 2 . . . . . 
2 . . 2 2 2 . . . 2 2 . . . 2 2 
2 . . 2 2 2 . . . 2 2 . . . 2 2 
2 . . 2 2 2 . . . 2 2 . . . 2 2 
2 . . 2 2 2 . . . 2 2 . . . 2 2 
. . . 2 2 2 . . . . . . . . 2 2 
. . . 2 2 2 . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
