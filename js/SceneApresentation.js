var Apresentation = new Phaser.Scene('Apresentation');

Apresentation.init = function(data){
}

Apresentation.preload = function(){

}

Apresentation.create = function(){
    var bg = this.add.image(centerX, centerY, 'verse_card');
    var quadro1 = this.add.image(centerX, centerY, 'job_face');
    var seta1 = this.add.image(centerX + 800, centerY, 'seta1').setInteractive();
    // var seta2 = this.add.image(centerX - 800, centerY, 'seta1').setFlipX(180).setInteractive();
    
        seta1.on('pointerup', function(){
            game.scene.stop('Apresentation')
            game.scene.start('Frame1');
        })
        seta1.on('pointerover', function(){
            seta1.setTexture('seta2')
        })
        seta1.on('pointerout', function(){
            seta1.setTexture('seta1')
        })




}