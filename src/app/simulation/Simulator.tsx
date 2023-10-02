'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas, Vector3 as Vector3Fiber } from '@react-three/fiber'
import { useState } from 'react'
import useSWR from 'swr'
import { Vector3 } from 'three'
import RenderedBlock from './RenderedBlock'
import SimulationBlock, { Facing } from './SimulationBlock'
import Block from './blocks/Block'
import RedstoneTorch from './blocks/RedstoneTorch'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Simulator(props: { circuit: string }) {
  const [autoRotate, setAutoRotate] = useState(true)

  const [clickedBlock, setClickedBlock] = useState(-1)

  const [minPos, setMinPos] = useState<Vector3Fiber>([100, 100, 100])

  const [maxPos, setMaxPos] = useState<Vector3Fiber>([-100, -100, -100])

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
        blocks.push(
          new RedstoneTorch(jsonBlock.data.position, Facing.Down)
        )
      default:
        blocks.push(
          new Block(jsonBlock.data.position, jsonBlock.data.colorGroup)
        )
    }
  })

  blocks.forEach(block => {
    if (block.position < minPos) {
      setMinPos(block.position as Vector3)
    }
    if (block.position > maxPos) {
      setMaxPos(block.position as Vector3)
    }
  })

  const minPosArr = minPos as number[]
  const maxPosArr = maxPos as number[]

  let centerPos: Vector3Fiber = [
    (minPosArr[0] + maxPosArr[0]) / 2,
    (minPosArr[1] + maxPosArr[1]) / 2,
    (minPosArr[2] + maxPosArr[2]) / 2,
  ]

  return (
    <Canvas
      onPointerLeave={() => setAutoRotate(true)}
      camera={{
        position: [centerPos[0] + 3, centerPos[1], centerPos[2] + 3],
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
        minDistance={Math.max(maxPosArr[0], maxPosArr[1], maxPosArr[2]) + 2}
      />
      {blocks.map((block, i) => {
        return (
          <RenderedBlock
            key={`block_${i}`}
            block={block}
            clicked={clickedBlock === i}
            setClicked={clicked =>
              clicked ? setClickedBlock(i) : setClickedBlock(-1)
            }
          />
        )
      })}
    </Canvas>
  )
}
