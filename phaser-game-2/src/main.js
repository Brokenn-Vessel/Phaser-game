import Phaser from '../libs/phaser.js' ;
import config from './config.js' ;
import {GameScene} from './scenes/gamescene.js' ;

const game = new Phaser.Game(config) ;

game.scene.add('GAMESCENE', GameScene) ;
game.scene.start('GAMESCENE') ;