import Box from './Box'
import SimulationBlock from './SimulationBlock'

export default function Grid(props: { blocks: SimulationBlock[] }) {
  const blocks: JSX.Element[] = []

  props.blocks.forEach(block => {
    blocks.push(
      <Box
        key={`${block.position.toString()}`}
        position={block.position as THREE.Vector3}
        color={parseInt(block.color)}
        texture={block.getTexturePath()}
      />
    )
  })

  return blocks
}
