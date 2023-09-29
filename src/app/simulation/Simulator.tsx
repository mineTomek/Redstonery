'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import useSWR from 'swr'
import BlockColors from './BlockColors'
import Box from './Box'
import SimulationBlock from './SimulationBlock'
import Block from './blocks/Block'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Simulator() {
  const [autoRotate, setAutoRotate] = useState(true)

  const { data, error } = useSWR('/api/prebuilt?circuit=clock', fetcher)

  if (error) return <div>Failed to load circuit</div>
  //Handle the loading state
  if (!data) return <div>Loading circuit...</div>

  console.log(data)

  let blocks: SimulationBlock[] = []

  let jsonObject = data.blocks as { type: string; data: SimulationBlock }[]

  jsonObject.forEach(jsonBlock => {
    switch (jsonBlock.type) {
      default:
        blocks.push(new Block(jsonBlock.data.position, jsonBlock.data.colorGroup))
    }
  })

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
      {blocks.map(block => (
        <Box
          key={`${block.position.toString()}`}
          position={block.position as THREE.Vector3}
          color={
            block.colorGroup
              ? parseInt(
                  BlockColors.prototype.generateColors(3, 54, 50)[
                    block.colorGroup!
                  ]
                )
              : 0xffffff
          }
          texture={block.texturePath}
        />
      ))}
    </Canvas>
  )
}
