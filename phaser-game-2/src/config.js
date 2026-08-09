import Phaser from '../libs/phaser.js' ;

const config = {
    parent: 'game-container' ,
    backgroundColor: '#707070',
    scale: {
        width: '100%',
        height: '100%',
        mode: Phaser.Scale.FIT
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }        
    }
}

export default config ;