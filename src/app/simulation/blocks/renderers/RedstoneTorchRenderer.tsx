import { useTexture } from '@react-three/drei'
import { useState } from 'react'
import { NearestFilter } from 'three'
import SimulationBlock from '../../SimulationBlock'

export default function RedstoneTorchRenderer(props: {
  block: SimulationBlock
  click: { setClicked: (clicked: boolean) => void; clicked: boolean }
}) {
  const [hovered, setHovered] = useState(false)

  const pixel = 1 / 16

  const color = hovered || props.click.clicked ? 0xffffff : 0xcccccc

  const texture = useTexture(props.block.texturePaths[hovered ? 0 : 1])
  texture.magFilter = NearestFilter

  const topTexture = texture.clone()

  topTexture.repeat.set(2 * pixel, 2 * pixel)

  topTexture.offset.set(7 * pixel, 8 * pixel)

  const bottomTexture = texture.clone()

  bottomTexture.repeat.set(2 * pixel, 2 * pixel)

  bottomTexture.offset.set(7 * pixel, 12 * pixel)

  return (
    <group
      scale={props.click.clicked ? 1 + (1 / 16) * 2 : 1}
      position={props.block.position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={event => {
        event.stopPropagation()
        if (event.shiftKey) {
          props.click.setClicked(!props.click.clicked)
        }
      }}
    >
      <mesh>
        <boxGeometry args={[1, 1, 2 * pixel]} />
        <meshStandardMaterial
          map={texture}
          color={color}
          attach={'material-4'}
          transparent
          depthWrite={false}
        />
        <meshStandardMaterial
          map={texture}
          color={color}
          attach={'material-5'}
          transparent
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[2 * pixel, 1, 1]} />
        <meshStandardMaterial
          map={texture}
          color={color}
          attach={'material-0'}
          transparent
          depthWrite={false}
        />
        <meshStandardMaterial
          map={texture}
          color={color}
          attach={'material-1'}
          transparent
          depthWrite={false}
        />
      </mesh>

      <mesh position={[0, -3 * pixel, 0]}>
        <boxGeometry args={[2 * pixel, 10 * pixel, 2 * pixel]} />
        <meshStandardMaterial
          map={topTexture}
          color={color}
          attach={'material-2'}
        />
        <meshStandardMaterial
          map={bottomTexture}
          color={color}
          attach={'material-3'}
        />
      </mesh>
    </group>
  )
}
