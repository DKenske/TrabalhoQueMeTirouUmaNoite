const centerX = 960;
const centerY = 540;

var config = {
    type: Phaser.CANVAS,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { x: 300 },
                debug: false
            }
        }
    },

    scene: [SceneInitial, Apresentation, Frame1, Frame2,  Frame3, Frame4 ]
};

var font_LatoRegular = {
    fontFamily: "Lato-Regular",
    boundsAlignH: "center",
    boundsAlignV: "middle"
}

var font_LatoBlack = {
    fontFamily: "Lato-Black",
    boundsAlignH: "center",
    boundsAlignV: "middle"
}

var game = new Phaser.Game(config);