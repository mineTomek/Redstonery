import { Vector3 } from 'three'
import GridBlock from './GridBlock'

export default function Grid(props: {
  width: number
  height: number
  depth: number
}) {
  const blocks = []

  for (let x = 0; x < props.width; x++) {
    for (let y = 0; y < props.height; y++) {
      for (let z = 0; z < props.depth; z++) {
        blocks.push(
          <GridBlock
            key={`${x}-${y}-${z}`}
            position={
              new Vector3(
                x - props.width / 3,
                y - props.height / 3,
                z - props.depth / 3
              )
            }
            color={Math.random() * 0xffffff}
          />
        )
      }
    }
  }

  return blocks
}