class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`,
    });
  }

  preload() {
    //load assets here!
    this.load.audio(`yay`, "assets/sounds/yay.wav");
    this.load.image(`smileavatar`, `assets/images/smileavatar.png`);
    this.load.image(`cute`, `assets/images/cute.jpg`);
    this.load.image(`pill`, `assets/images/pill.png`);
    this.load.image(`thumbs-down`, `assets/images/sad.png`);
    this.load.image(`thumbs-up`, `assets/images/happy.png`);
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {}

  update() {}
}
