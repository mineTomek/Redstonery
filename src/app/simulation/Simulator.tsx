'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas, Vector3 as Vector3Fiber } from '@react-three/fiber'
import { useState } from 'react'
import useSWR from 'swr'
import SimulationBlock, { Facing } from './SimulationBlock'
import Block from './blocks/Block'
import RedstoneTorch from './blocks/RedstoneTorch'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Simulator(props: { circuit: string }) {
  const [autoRotate, setAutoRotate] = useState(true)

  const [clickedBlock, setClickedBlock] = useState(-1)

  let minPos: Vector3Fiber = [100, 100, 100]

  let maxPos: Vector3Fiber = [-100, -100, -100]

  const { data, error } = useSWR(
    '/api/prebuilt?circuit=' + props.circuit,
    fetcher
  )

  if (error) return <div>Failed to load circuit</div>

  if (!data) return <div>Loading circuit...</div>

  let blocks: SimulationBlock[] = []

  let jsonObject = data.blocks as { type: string; data: SimulationBlock }[]

  jsonObject.forEach(jsonBlock => {
    switch (jsonBlock.type) {
      case 'redstone_torch':
        blocks.push(new RedstoneTorch(jsonBlock.data.position, Facing.Down))
        break
      default:
        blocks.push(
          new Block(jsonBlock.data.position, jsonBlock.data.colorGroup)
        )
    }
  })

  blocks.forEach(block => {
    if (block.position < minPos) {
      minPos = block.position
    }
    if (block.position > maxPos) {
      maxPos = block.position
    }
  })

  const minPosArr = minPos as number[]
  const maxPosArr = maxPos as number[]

  let centerPos: Vector3Fiber = [
    (minPosArr[0] + maxPosArr[0]) / 2,
    (minPosArr[1] + maxPosArr[1]) / 2,
    (minPosArr[2] + maxPosArr[2]) / 2,
  ]

  const cameraDistance =
    Math.max(
      maxPosArr[0] - minPosArr[0],
      maxPosArr[1] - minPosArr[1],
      maxPosArr[2] - minPosArr[2]
    ) + 1

  return (
    <Canvas
      onPointerLeave={() => setAutoRotate(true)}
      camera={{
        position: [
          centerPos[0] + cameraDistance,
          centerPos[1],
          centerPos[2] + cameraDistance,
        ],
        near: 0.01,
      }}
    >
      <ambientLight />
      <pointLight
        position={[10, 10, 10]}
        intensity={2 * 500}
      />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={2}
        onStart={() => setAutoRotate(false)}
        target={centerPos}
        minDistance={
          process.env.NODE_ENV == 'production'
            ? Math.max(maxPosArr[0], maxPosArr[1], maxPosArr[2]) + 2
            : 0.1
        }
      />
      {blocks.map((block, i) => {
        return (
          <block.renderer
            key={`block_${i}`}
            block={block}
            click={{
              setClicked: clicked =>
                clicked ? setClickedBlock(i) : setClickedBlock(-1),
              clicked: clickedBlock === i,
            }}
          />
        )
      })}
    </Canvas>
  )
}
