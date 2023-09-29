import BlockColors from './BlockColors'
import Box from './Box'
import SimulationBlock from './SimulationBlock'

export default function Grid(props: { blocks: SimulationBlock[] }) {
  const blocks: JSX.Element[] = []

  props.blocks.forEach(block => {
    blocks.push(
      <Box
        key={`${block.position.toString()}`}
        position={block.position as THREE.Vector3}
        color={block.colorGroup ? parseInt(BlockColors.prototype.generateColors(3, 54, 50)[block.colorGroup!]) : 0xffffff}
        texture={block.texturePath}
      />
    )
  })

  return blocks
}
