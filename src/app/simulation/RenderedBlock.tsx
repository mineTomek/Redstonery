import { useTexture } from '@react-three/drei'
import { useState } from 'react'
import { NearestFilter, Vector3 } from 'three'
import generateColors from './BlockColors'
import SimulationBlock from './SimulationBlock'

export default function RenderedBlock(props: {
  block: SimulationBlock
  setClicked: (clicked: boolean) => void
  clicked: boolean
}) {
  // const ref = useRef<THREE.Mesh>(null!)

  const [hovered, setHovered] = useState(false)

  const texture = useTexture('./assets/' + props.block.texturePath)
  texture.magFilter = NearestFilter

  const color = props.block.colorGroup
    ? parseInt(generateColors(props.block.colorGroup))
    : 0xffffff

  return (
    <props.block.renderer
      position={props.block.position as Vector3}
      texture={texture}
      color={color}
      click={{ setClicked: props.setClicked, clicked: props.clicked }}
      hover={{ setHovered, hovered }}
    />
  )
}
