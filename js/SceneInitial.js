var SceneInitial  = new Phaser.Scene('SceneInitial')

SceneInitial.init = function(data){

}

SceneInitial.preload = function(){

    this.load.image('kandinsky', 'assets/amarelovermelhoazulKardinsky.jpg');
    this.load.image('faces', 'assets/operariostarsiladoamaral.png' );
    this.load.image('job_face', 'assets/job_face.jpg');
    this.load.image('salvador', 'assets/persistenciadamemoriaSalvadorDali.jpg');
    this.load.image('romeroBrito', 'assets/RomeroBrito.jpg');
    this.load.image('seta1', 'assets/seta1.png');
    this.load.image('seta2', 'assets/seta2.png');
    this.load.image('verse_card', 'assets/verse_card.png');
    this.load.image('conectando', 'assets/conectando.png');
    this.load.image('start1', 'assets/start1.png');
    this.load.image('start2', 'assets/start2.png');
    this.load.image('bg', 'assets/bg.png')
    this.load.image('bg_card', 'assets/bg_card.png')
    this.load.image('frame1', 'assets/frame1.png')
    this.load.image('frame2', 'assets/frame2.png')
    this.load.image('frame3', 'assets/frame3.png')
    this.load.image('agradecimento', 'assets/agradecimentos.png')
    this.load.image('theme', 'assets/Theme.png')


}

SceneInitial.create = function(){
    var bg = this.add.image(centerX, centerY, 'verse_card').setSize(2440, 1920);
    var bg_text = this.add.image(centerX + 100, centerY + 300, 'conectando').setScale(0.5);
    var start = this.add.image(centerX - 70, centerY + 420, 'start1').setScale(0.5).setActive(false).setVisible(false).setInteractive();
    var i = 0
    var connect = setInterval(() => {
        i++;
        if(i >= 2){
            clearInterval(connect);
            bg_text.setActive(false).setVisible(false);
            start.setActive(true).setVisible(true)
            start.on('pointerup', function(){
                game.scene.stop('SceneInitial');
                game.scene.start('Apresentation');
                
            })
            start.on('pointerover', function(){
                start.setTexture('start2');
            })

            start.on('pointerout', function(){
                start.setTexture('start1')
            })
        }
    }, 1000);
    

}

SceneInitial.update = function(){


}