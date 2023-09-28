import { Colors } from './Box'
import GridBlock from './GridBlock'

export default function Grid(props: {
  width: number
  height: number
  depth: number
}) {
  const blocks = []

  const colors = [
    Colors.Birch,
    Colors.Oak,
    Colors.Spruce,
    Colors.DarkOak,
    Colors.Jungle,
    Colors.Acacia,
  ]

  for (let x = 0; x < props.width; x++) {
    for (let y = 0; y < props.height; y++) {
      for (let z = 0; z < props.depth; z++) {
        blocks.push(
          <GridBlock
            key={`${x}-${y}-${z}`}
            position={[
              x - props.width / 3,
              y - props.height / 3,
              z - props.depth / 3,
            ]}
            color={colors[x]}
          />
        )
      }
    }
  }

  return blocks
}
