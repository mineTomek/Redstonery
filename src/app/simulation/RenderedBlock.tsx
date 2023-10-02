import { useTexture } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { NearestFilter } from 'three'
import SimulationBlock from './SimulationBlock'

export default function RenderedBlock(props: {
  block: SimulationBlock
  setClicked: (clicked: boolean) => void
  clicked: boolean
}) {
  // const ref = useRef<THREE.Mesh>(null!)

  const [hovered, setHovered] = useState(false)

  const texture = useTexture(props.texture)
  texture.magFilter = NearestFilter

  return (
    <mesh
      position={props.position}
      scale={props.clicked ? 1 + (1 / 16) * 2 : 1}
      onClick={event => {
        event.stopPropagation()
        if (event.shiftKey) {
          props.setClicked(!props.clicked)
        }
      }}
      onPointerOver={event => {
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={_ => {
        setHovered(false)
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        map={texture}
        color={
          hovered || props.clicked
            ? props.color < 0xdddddd
              ? props.color + 0x222222
              : 0xffffff
            : props.color
        }
      />
    </mesh>
  )
}
