import Phaser from '../../libs/phaser.js' ;

export class GameScene extends Phaser.Scene {
    constructor() {
        super({key: 'GAMESCENE'}) ;
    }

    preload() {
        console.log('Preload inoked') ;
        this.load.image('tiles', "src/assets/tilesets/map.png") ;
        this.load.tilemapTiledJSON('map', "src/assets/maps/map2.tmj") ;

    }

    create() {
        console.log('create invoked') ;

        const map = this.make.tilemap({
            key: 'map',
            tileHeight: 16,
            tileWidth: 16
        }) ;

        const tileset = map.addTilesetImage(
            'Landscape ', 'tiles'
        ) ;

        console.log(map.tilesets) ;
        console.log(map.layers) ;

        map.createLayer(
            "ground",
            tileset,
            0, 0
        ) ;

        map.createLayer(
            'pavement',
            tileset,
            0, 0
        ) ;

        map.createLayer(
            'trees',
            tileset,
            0, 0
        )
    }

    update() {
        // console.log('Update invoked') ;
    }
} 