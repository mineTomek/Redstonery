import { Vector3 as Vector3Fiber } from '@react-three/fiber'
import BlockRenderer from './blocks/renderers/BlockRenderer'

export default interface SimulationBlock {
  use(): void

  position: Vector3Fiber

  /**
   * This is a group of colors. Objects with the same color will be assigned the same color.
   */
  colorGroup?: number

  /**
   * Full paths to a texture files.
   * For example `['textures/block.png']`.
   */
  texturePaths: string[]

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
