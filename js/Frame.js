var Frame4 = new Phaser.Scene('Frame4');

Frame4.init = function(data){
}

Frame4.preload = function(){

}

Frame4.create = function(){
    var quadros = [];
    var textos = [];
    this.add.image(centerX, centerY, 'bg');
    this.add.image(centerX + 380, centerY , 'agradecimento')
    this.add.image(centerX - 500, centerY + 300, 'theme')

    quadros[1] = this.add.image(centerX - 500, centerY - 300, 'bg_card').setScale(0.3).setInteractive()
    textos[1] = this.add.text(centerX - 630, centerY - 170, '', font_LatoBlack).setVisible(false).setActive(false).setColor('#000000')

    quadros[0] = this.add.image(centerX, centerY, 'bg_card').setScale(0.3).setInteractive()
    textos[0] = this.add.text(centerX - 130, centerY + 130, '', font_LatoBlack).setVisible(false).setActive(false).setColor('#000000')
    
    quadros [2] = this.add.image(centerX + 500, centerY + 300, 'bg_card').setScale(0.3).setInteractive()
    textos[2] = this.add.text(centerX + 330, centerY + 430, '', font_LatoBlack).setVisible(false).setActive(false).setColor('#000000')
    
    quadros[0].on('pointerup', function(){
        quadros[0].setTexture('kandinsky').setScale(0.5)
        textos[0].setText('Amarelo Verde Azul - Kandinsky').setFontSize(20).setVisible(true).setActive(true);
    })

    quadros[1].on('pointerup', function(){
        quadros[1].setTexture('faces').setScale(1.2)
        textos[1].setText('Operários - Tarsila Do Amaral').setFontSize(20).setVisible(true).setActive(true);
    })

    quadros[2].on('pointerup', function(){
        quadros[2].setTexture('salvador').setScale(0.5)
        textos[2].setText('Persistencia Da Memória - Salvador Dali').setFontSize(20).setVisible(true).setActive(true);
    })
    var seta2 = this.add.image(centerX - 800, centerY, 'seta1').setFlipX(180).setInteractive();
    

        seta2.on('pointerup', function(){
            game.scene.stop('Frame4')
            game.scene.start('Frame3');
        })
        seta2.on('pointerover', function(){
            seta2.setTexture('seta2')
        })
        seta2.on('pointerout', function(){
            seta2.setTexture('seta1')
        })


}