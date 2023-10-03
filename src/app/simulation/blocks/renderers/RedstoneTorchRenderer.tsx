import { Texture, Vector3 } from 'three'

export default function RedstoneTorchRenderer(props: {
  position: Vector3

  texture: Texture

  hover: { hovered: boolean; setHovered: (hovered: boolean) => void }

  click: { clicked: boolean; setClicked: (clicked: boolean) => void }
}) {
  const pixel = 1 / 16

  const color = props.hover.hovered || props.click.clicked ? 0xffffff : 0xcccccc

  const topTexture = props.texture.clone()

  topTexture.repeat.set(2 * pixel, 2 * pixel)

  topTexture.offset.set(7 * pixel, 7 * pixel)

  const bottomTexture = props.texture.clone()

  bottomTexture.repeat.set(2 * pixel, 2 * pixel)

  bottomTexture.offset.set(7 * pixel, 12 * pixel)

  return (
    <group
      scale={props.click.clicked ? 1 + (1 / 16) * 2 : 1}
      position={props.position}
      onPointerEnter={() => props.hover.setHovered(true)}
      onPointerOut={() => props.hover.setHovered(false)}
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
          map={props.texture}
          color={color}
          attach={'material-4'}
          transparent
          depthWrite={false}
        />
        <meshStandardMaterial
          map={props.texture}
          color={color}
          attach={'material-5'}
          transparent
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[2 * pixel, 1, 1]} />
        <meshStandardMaterial
          map={props.texture}
          color={color}
          attach={'material-0'}
          transparent
          depthWrite={false}
        />
        <meshStandardMaterial
          map={props.texture}
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
