namespace sprites {
    /**
     * Sets get the sprite's tile X position. Assuming 16x16 tile
     */
    export function getTileX(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.x / 16;
    }

    /**
     * Sets get the sprite's tile Y position. Assuming 16x16 tile
     */
    export function getTileY(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.y / 16;
    }
}


controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let oldLadyTileX = sprites.getTileX(oldLady);
    if(oldLady.image == oldLadyImgClone){
        oldLadyTileX--
    } else {
        oldLadyTileX++
    }

    let l = tiles.getTileLocation(oldLadyTileX, sprites.getTileY(oldLady))
    tiles.setTileAt(l, myTiles.tile2)
    tiles.setWallAt(l, true)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    oldLady.setImage(oldLadyImgClone)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    oldLady.setImage(oldLadyImg)
})

let oldLadyImg = img`
    .....cccccccccccccccc..
    ...cc11111111c1111111c.
    ...cc1111111111111111c.
    ..c111111111111111111c.
    .cc1111111111d1111111c.
    c1111111ddddddddddd11c.
    c111111ddddddddddddde..
    c111111ddddfddddddfde..
    c111111ddddfddddddfde..
    c11111ddddddffddffdde..
    c11111ddddddffddffdde..
    ccc1111ddddddddbdddde..
    ..c1111ddddddddddddde..
    ..c1111ddddddddddddde..
    ...cc1dddddddd2ddddde..
    .....bddddddddddddde...
    ...2244444444ddd4442...
    ..22244ee44444444444ee.
    ..2224bbdee444244444bde
    ..2224bbdee444444444bde
    ..2224bbdee444444444bde
    ..22244ee44444244444ee.
    ..2224444444444444442..
    ..2224444444444444442..
    ..4444444444444444444..
    ..4444444444444444444..
    ...444bbb44444bbbb44...
    .....ebbdee..ebbdde....
    .....222b22..222bb2....
    .....2.2222..2.2222....
`
let oldLadyImgClone = oldLadyImg.clone()
oldLadyImgClone.flipX()
let oldLady = sprites.create(oldLadyImg, SpriteKind.Player)
controller.moveSprite(oldLady)
scene.cameraFollowSprite(oldLady)