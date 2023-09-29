import { Vector3 } from '@react-three/fiber'
import SimulationBlock, { Facing } from '../SimulationBlock'
import block from './../assets/block.png'

export default class Block implements SimulationBlock {
  position: Vector3 = [0, 0, 0]
  type: string = 'block'
  colorGroup?: number = 0
  texturePath: string = block.src
  facing?: Facing = undefined
  state?: boolean = undefined
  locked?: boolean = undefined
  subtract?: boolean = undefined

  constructor(position: Vector3, colorGroup?: number) {
    this.position = position
    this.colorGroup = colorGroup
  }

  use(): void {
    throw new Error('Method not implemented.')
  }
}
