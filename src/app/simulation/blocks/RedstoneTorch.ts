import { Vector3 } from '@react-three/fiber'
import SimulationBlock, { Facing } from '../SimulationBlock'
import BlockRenderer from './renderers/BlockRenderer'

export default class RedstoneTorch implements SimulationBlock {
  position: Vector3 = [0, 0, 0]

  colorGroup?: number = undefined
  texturePath: string = 'textures/redstone_torch.png'
  renderer = BlockRenderer

  facing?: Facing = Facing.Down
  state?: boolean = undefined
  locked?: boolean = undefined
  subtract?: boolean = undefined

  constructor(position: Vector3, facing?: Facing) {
    this.position = position
    this.facing = facing
  }

  use(): void {
    throw new Error('Method not implemented.')
  }
}
