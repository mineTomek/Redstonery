import { useTexture } from '@react-three/drei'
import { useState } from 'react'
import { NearestFilter } from 'three'
import generateColors from '../../BlockColors'
import SimulationBlock from '../../SimulationBlock'

export default function BlockRenderer(props: {
  block: SimulationBlock
  click: { setClicked: (clicked: boolean) => void; clicked: boolean }
}) {
  const [hovered, setHovered] = useState(false)

  const baseColor = props.block.colorGroup
    ? parseInt(generateColors(props.block.colorGroup))
    : 0xffffff

  const color =
    hovered || props.click.clicked
      ? baseColor < 0xdddddd
        ? baseColor + 0x222222
        : 0xffffff
      : baseColor

  const texture = useTexture(props.block.texturePaths[0])
  texture.magFilter = NearestFilter

  return (
    <mesh
      position={props.block.position}
      scale={props.click.clicked ? 1 + (1 / 16) * 2 : 1}
      onClick={event => {
        event.stopPropagation()
        if (event.shiftKey) {
          props.click.setClicked(!props.click.clicked)
        }
      }}
      onPointerEnter={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        map={texture}
        color={
          hovered || props.click.clicked
            ? color < 0xdddddd
              ? color + 0x222222
              : 0xffffff
            : color
        }
        transparent
      />
    </mesh>
  )
}
