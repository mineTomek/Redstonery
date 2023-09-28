export default class SimBlock {
  public x: number = 0
  public y: number = 0
  public z: number = 0

  public color: number = 0xffffff

  public facing: Facing = Facing.None

  public state: boolean = false

  public locked: boolean = false

  public subtract: boolean = false

  constructor(x: number, y: number, z: number, color: number) {
    this.x = x
    this.y = y
    this.z = z
    this.color = color
  }
}

export enum Facing {
  None,
  Up,
  Down,
  North,
  East,
  South,
  West,
}
