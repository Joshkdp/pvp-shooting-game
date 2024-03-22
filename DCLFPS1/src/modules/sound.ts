export class Sound extends Entity {
    constructor(clip: AudioClip) {
      super()
      engine.addEntity(this)
      this.addComponent(new Transform())
      this.setParent(Attachable.AVATAR)
      this.addComponent(new AudioSource(clip))
    }
  }
  