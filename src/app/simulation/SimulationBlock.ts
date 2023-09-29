import { Vector3 } from '@react-three/fiber'

export default interface SimulationBlock {
  position: Vector3

  /**
   * This value is used for the type that the block should be. This is specified in the README file
   */
  type: string

  /**
   * This is for color values like *0x6dc53b*
   */
  color: string

  /**
   * This is a path to the texture, that the block should use
   */
  texture: string

  facing?: Facing

  state?: boolean

  locked?: boolean

  subtract?: boolean

  use(): void

  getTexturePath(): string

  getColor(): string

  getFacing(): Facing

  getState(): boolean

  getLocked(): boolean

  getSubtract(): boolean
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
