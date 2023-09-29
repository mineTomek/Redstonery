import { Vector3 } from '@react-three/fiber'

export default interface SimulationBlock {
  use(): void

  position: Vector3

  /**
   * This value is used for the type that the block should be. This is specified in the README file
   */
  type: string

  /**
   * This is a group of colors. Objects with the same color will be assigned the same color.
   */
  colorGroup?: number

  /**
   * A full path to the texture
   */
  texturePath: string

  facing?: Facing

  state?: boolean

  locked?: boolean

  subtract?: boolean
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
