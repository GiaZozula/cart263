class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }

  create() {
    this.sadness = this.physics.add.group({
      key: `thumbs-down`,
      quantity: 120,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });
    Phaser.Actions.RandomRectangle(
      this.sadness.getChildren(),
      this.physics.world.bounds
    );

    // make some random variables to position the pill and Happiness

    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;

    //Create the pill at the same spawn as the thumbs up!
    this.pill = this.physics.add
      .sprite(x, y, `pill`)
      .setVelocity(1000, 2000)
      .setBounce(2.5, 2.5)
      .setCollideWorldBounds(true);

    //create happiness at a random position
    this.happiness = this.physics.add.sprite(x, y, `thumbs-up`);

    //create the avatar
    this.avatar = this.physics.add.sprite(400, 300, `avatar`);
    this.avatar.setCollideWorldBounds(true);

    this.physics.add.overlap(
      this.avatar,
      this.happiness,
      this.getHappy,
      null,
      this
    );

    this.physics.add.collider(this.avatar, this.sadness);
    this.physics.add.collider(this.sadness, this.sadness);
    this.physics.add.collider(this.pill, this.sadness);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  getHappy(avatar, sadness) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.happiness.setPosition(x, y);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-150);
    } else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(150);
    } else {
      this.avatar.setAngularVelocity(0);
    }

    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(
        this.avatar.rotation,
        200,
        this.avatar.body.acceleration
      );
    } else {
      this.avatar.setAcceleration(0);
    }
  }
}
