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
   * Full path to a texture file.
   * For example `textures/block.png`.
   */
  texturePath: string

  /**
   * Full path to a `*.gltf` file containing the model from assets.
   * For example `models/full_block.gltf`.
   * Texture has to be a separate file in texturePath.
   */
  modelPath: string

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
