var Frame2 = new Phaser.Scene('Frame2')

Frame2.init = function(){

}

Frame2.preload = function(){

}

Frame2.create = function(){
    var bg = this.add.image(centerX, centerY, 'bg');
    var frame2 = this.add.image(centerX, centerY, 'frame2').setScale(0.8);

    var seta1 = this.add.image(centerX + 800, centerY, 'seta1').setInteractive();
    var seta2 = this.add.image(centerX - 800, centerY, 'seta1').setFlipX(180).setInteractive();
    
        seta1.on('pointerup', function(){
            game.scene.stop('Frame2')
            game.scene.start('Frame3');
        })
        seta1.on('pointerover', function(){
            seta1.setTexture('seta2')
        })
        seta1.on('pointerout', function(){
            seta1.setTexture('seta1')
        })

        seta2.on('pointerup', function(){
            game.scene.stop('Frame2')
            game.scene.start('Frame1');
        })
        seta2.on('pointerover', function(){
            seta2.setTexture('seta2')
        })
        seta2.on('pointerout', function(){
            seta2.setTexture('seta1')
        })
}