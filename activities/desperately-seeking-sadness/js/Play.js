class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    //create the avatar
    this.avatar = this.phsyics.add.sprite;
  }

  update() {}
}
