'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Grid from './Grid'
import SimBlock from './SimBlock'

export default function Simulator() {
  const [autoRotate, setAutoRotate] = useState(true)

  const [blocks, setBlocks] = useState<SimBlock[]>([
    new SimBlock(0, 0, 0, 0x6dc53b),
    new SimBlock(1, 0, 0, 0xc56d3b),
    new SimBlock(0, 0, 1, 0xc53b6d),
    new SimBlock(1, 0, 1, 0x6d3bc5),
    new SimBlock(0, 1, 0, 0x6d3bc5),
  ])

  return (
    <Canvas onPointerLeave={() => setAutoRotate(true)}>
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
      <Grid blocks={blocks} />
    </Canvas>
  )
}
