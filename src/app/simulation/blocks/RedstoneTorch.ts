import { MeshProps, Vector3 } from '@react-three/fiber'
import SimulationBlock, { Facing } from '../SimulationBlock'

export default class RedstoneTorch implements SimulationBlock {
  position: Vector3 = [0, 0, 0]
  type: string = 'block'
  colorGroup?: number = undefined
  texturePath: string = 'textures/redstone_torch.png'
  modelPath: string = 'models/redstone_torch.gltf'
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
