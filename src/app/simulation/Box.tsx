import { useTexture } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { NearestFilter } from 'three'
import sample_texture from './assets/sample_texture.png'

export default function Box(props: {
  position: Vector3 | [x: number, y: number, z: number]
  color: number
}) {
  const ref = useRef<THREE.Mesh>(null!)

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const texture = useTexture(sample_texture.src)
  texture.magFilter = NearestFilter

  return (
    <mesh
      position={props.position}
      ref={ref}
      scale={clicked ? 1 + (1 / 16) * 2 : 1}
      // onClick={event => click(!clicked)}
      onPointerOver={event => {
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={event => {
        setHovered(false)
        setClicked(false)
      }}
      onPointerDown={event => {
        event.stopPropagation()
        setClicked(true)
      }}
      onPointerUp={event => setClicked(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        map={texture}
        color={hovered ? props.color + 0x222222 : props.color}
      />
    </mesh>
  )
}
