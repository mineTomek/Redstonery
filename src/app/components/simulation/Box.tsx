import { Vector3 } from '@react-three/fiber'
import { useRef,useState } from 'react'

export default function Box(props: {
  position: Vector3
  color: string | number
}) {
  const ref = useRef<THREE.Mesh>(null!)

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)


  return (
    <mesh
      position={props.position}
      ref={ref}
      scale={clicked ? 1.2 : 1}
      // onClick={event => click(!clicked)}
      onPointerOver={event => setHovered(true)}
      onPointerOut={event => {
        setHovered(false)
        setClicked(false)
      }}
      onPointerDown={event => setClicked(true)}
      onPointerUp={event => setClicked(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'white' : props.color} />
    </mesh>
  )
}

export enum Colors {
  Birch = 0xa69d6f,
  Oak = 0x91754d,
  Spruce = 0x63492b,
  DarkOak = 0x362310,
  Jungle = 0x8e684f,
  Acacia = 0xb75312,
}
