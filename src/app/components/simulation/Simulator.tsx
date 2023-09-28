'use client'

import { Canvas } from '@react-three/fiber'
import Grid from './Grid'

export default function Simulator() {
  return (
    <Canvas>
      <ambientLight />.
      <pointLight
        position={[10, 10, 10]}
        intensity={2 * 500}
      />
      <Grid
        width={3}
        height={3}
        depth={3}
      />
    </Canvas>
  )
}
