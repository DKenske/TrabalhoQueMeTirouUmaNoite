var Frame1 = new Phaser.Scene('Frame1')

Frame1.init = function(){

}

Frame1.preload = function(){

}

Frame1.create = function(){
    var bg = this.add.image(centerX, centerY, 'bg');
    var frame1 = this.add.image(centerX, centerY, 'frame1').setScale(0.8);

    var seta1 = this.add.image(centerX + 800, centerY, 'seta1').setInteractive();
    var seta2 = this.add.image(centerX - 800, centerY, 'seta1').setFlipX(180).setInteractive();
    
        seta1.on('pointerup', function(){
            game.scene.stop('frame1')
            game.scene.start('Frame2');
        })
        seta1.on('pointerover', function(){
            seta1.setTexture('seta2')
        })
        seta1.on('pointerout', function(){
            seta1.setTexture('seta1')
        })

        seta2.on('pointerup', function(){
            game.scene.stop('Frame1')
            game.scene.start('Apresentation');
        })
        seta2.on('pointerover', function(){
            seta2.setTexture('seta2')
        })
        seta2.on('pointerout', function(){
            seta2.setTexture('seta1')
        })
}