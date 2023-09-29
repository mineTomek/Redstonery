import { Vector3 } from '@react-three/fiber'
import SimulationBlock, { Facing } from '../SimulationBlock'
import block from './../assets/block.png'

export default class Block implements SimulationBlock {
  position: Vector3 = [0, 0, 0]
  type: string = 'block'
  color: string = '0xffffff'
  texture: string = block.src
  facing?: Facing = undefined
  state?: boolean = undefined
  locked?: boolean = undefined
  subtract?: boolean = undefined

  constructor(position: Vector3, color: string) {
    this.position = position
    this.color = color
  }

  use(): void {
    throw new Error('Method not implemented.')
  }

  getTexturePath(): string {
    return this.texture
  }

  getColor(): string {
    throw new Error('Method not implemented.')
  }

  getFacing(): Facing {
    throw new Error('Method not implemented.')
  }

  getState(): boolean {
    throw new Error('Method not implemented.')
  }

  getLocked(): boolean {
    throw new Error('Method not implemented.')
  }

  getSubtract(): boolean {
    throw new Error('Method not implemented.')
  }
}
