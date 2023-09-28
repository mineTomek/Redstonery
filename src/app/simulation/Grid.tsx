import Box from './Box'
import SimBlock from './SimBlock'

export default function Grid(props: { blocks: SimBlock[] }) {
  const blocks: JSX.Element[] = []

  props.blocks.forEach(block => {
    blocks.push(
      <Box
        key={`${block.x}-${block.y}-${block.z}`}
        position={[block.x, block.y, block.z]}
        color={block.color}
      />
    )
  })

  return blocks
}
