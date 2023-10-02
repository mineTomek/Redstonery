import { Vector3 as Vector3Fiber } from '@react-three/fiber'

export default interface SimulationBlock {
  use(): void


  /**
   * This value is used for the type that the block should be. This is specified in the README file
   */
  type: string
  position: Vector3Fiber

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

  /**
   * Block renderer function component that has to be the same as BlockRenderer
   */
  renderer: typeof BlockRenderer

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
