import Phaser from '../../libs/phaser.js' ;

export class GameScene extends Phaser.Scene {
    constructor() {
        super({key: 'GAMESCENE'}) ;
    }

    preload() {
        console.log('Preload inoked') ;
        this.load.image('tiles', "src/assets/tilesets/map.png") ;
        this.load.tilemapTiledJSON('map', "src/assets/maps/map2.tmj") ;
        this.load.spritesheet("player", "src/assets/player/player-spritesheet.png", {
            frameWidth: 32,
            frameHeight: 32
        });

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
        this.player = this.physics.add.sprite(200, 200, 'player', 15) ;
        this.player.setScale(2) ;
        console.log(this.textures.get("player")) ;

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("player", {
                start: 15,
                end: 19
            }),
            frameRate: 8,
            repeat: -1
        }) ;
        this.player.play("walk") ;

        // this.player.setDepth(100) ;
    }
    
    update() {
        // console.log('Update invoked') ;
    }
    } 