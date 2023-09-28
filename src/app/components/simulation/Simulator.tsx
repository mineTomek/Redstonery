'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Grid from './Grid'

export default function Simulator() {
  const [autoRotate, setAutoRotate] = useState(true)

  return (
    <Canvas>
      <ambientLight />
      <pointLight
        position={[10, 10, 10]}
        intensity={2 * 500}
      />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={2}
        onStart={() => setAutoRotate(false)}
      />
      <Grid
        width={6}
        height={1}
        depth={1}
      />
    </Canvas>
  )
}
