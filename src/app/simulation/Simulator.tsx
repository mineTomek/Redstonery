'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import useSWR from 'swr'
import Grid from './Grid'
import SimBlock from './SimBlock'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Simulator() {
  const [autoRotate, setAutoRotate] = useState(true)

  const { data, error } = useSWR('/api/prebuilt?circuit=clock', fetcher)

  if (error) return <div>Failed to load circuit</div>
  //Handle the loading state
  if (!data) return <div>Loading circuit...</div>

  console.log(data)

  let blocks: SimBlock[] = []

  let jsonObject = data.blocks as { position: number[]; color: string }[]

  jsonObject.forEach(jsonBlock => {
    blocks.push(
      new SimBlock(
        jsonBlock.position[0],
        jsonBlock.position[1],
        jsonBlock.position[2],
        parseInt(jsonBlock.color)
      )
    )
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
