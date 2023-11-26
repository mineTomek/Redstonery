import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button(props: {
  color: string
  disabled?: boolean
  icon?: IconProp
  iconSize?: number
  href?: string
  text: string
  //   onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  const colors: { [key: string]: string } = {
    primary: 'bg-primary-500',
    warn: 'bg-yellow-500',
    green: 'bg-green-500',
    gray: 'bg-slate-500',
  }

  return (
    <a
      className={`inline-flex h-[68px] items-center justify-start gap-4 rounded-2xl border-4 border-white/30 ${
        colors[props.color]
      } px-4 py-2`}
      //   onClick={props.onClick}
      href={props.href}
    >
      <div className='text-[26px] font-black text-white'>{props.text}</div>
      {props.icon && (
        <div className='flex h-12 w-12 justify-center'>
          <FontAwesomeIcon
            icon={props.icon}
            color='white'
            width={props.iconSize}
          />
        </div>
      )}
    </a>
  )
}
