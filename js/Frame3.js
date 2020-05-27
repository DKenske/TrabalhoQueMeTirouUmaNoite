var Frame3 = new Phaser.Scene('Frame3')

Frame3.init = function(){

}

Frame3.preload = function(){

}

Frame3.create = function(){
    var bg = this.add.image(centerX, centerY, 'bg');
    var frame3 = this.add.image(centerX, centerY, 'frame3').setScale(0.8);

    var seta1 = this.add.image(centerX + 800, centerY, 'seta1').setInteractive();
    var seta2 = this.add.image(centerX - 800, centerY, 'seta1').setFlipX(180).setInteractive();
    
        seta1.on('pointerup', function(){
            game.scene.stop('Frame3')
            game.scene.start('Frame4');
        })
        seta1.on('pointerover', function(){
            seta1.setTexture('seta2')
        })
        seta1.on('pointerout', function(){
            seta1.setTexture('seta1')
        })

        seta2.on('pointerup', function(){
            game.scene.stop('Frame3')
            game.scene.start('Frame2');
        })
        seta2.on('pointerover', function(){
            seta2.setTexture('seta2')
        })
        seta2.on('pointerout', function(){
            seta2.setTexture('seta1')
        })
}