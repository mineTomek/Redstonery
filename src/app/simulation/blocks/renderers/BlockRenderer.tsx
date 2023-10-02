import { Texture, Vector3 } from 'three'

export default function BlockRenderer(props: {
  position: Vector3

  texture: Texture
  color: number

  hover: { hovered: boolean; setHovered: (hovered: boolean) => void }

  click: { clicked: boolean; setClicked: (clicked: boolean) => void }
}) {
  return (
    <mesh
      position={props.position}
      scale={props.click.clicked ? 1 + (1 / 16) * 2 : 1}
      onClick={event => {
        event.stopPropagation()
        console.log(event.target)
        if (event.shiftKey) {
          props.click.setClicked(!props.click.clicked)
        }
      }}
      onPointerEnter={() => props.hover.setHovered(true)}
      onPointerOut={() => props.hover.setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        map={props.texture}
        color={
          props.hover.hovered || props.click.clicked
            ? props.color < 0xdddddd
              ? props.color + 0x222222
              : 0xffffff
            : props.color
        }
        transparent
      />
    </mesh>
  )
}
