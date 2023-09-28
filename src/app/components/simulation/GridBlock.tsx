import { useRef } from 'react'
import { Mesh, Vector3 } from 'three'
import Box from './Box'

export default function GridBlock(props: {
  position: Vector3
  color: string | number
}) {
  const ref = useRef<Mesh>(null!)

  return (
    <Box
      position={props.position}
      color={props.color}
    ></Box>
  )
}
