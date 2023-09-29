'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import useSWR from 'swr'
import Grid from './Grid'
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

  let jsonObject = data.blocks as SimulationBlock[]

  jsonObject.forEach(jsonBlock => {
    switch (jsonBlock.type) {
      case 'block':
        blocks.push(
          new Block(
            jsonBlock.position,
            jsonBlock.color
          )
        )
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
      <Grid blocks={blocks} />
    </Canvas>
  )
}
