import { Vector3 } from '@react-three/fiber'
import { useRef,useState } from 'react'

export default function Box(props: {
  position: Vector3
  color: string | number
}) {
  const ref = useRef<THREE.Mesh>(null!)

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  //   useFrame((state, delta) => {
  //     ref.current.rotation.x += delta
  //   })

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
      <meshStandardMaterial color={/* hovered ? 'white' : */ props.color} />
    </mesh>
  )
}
