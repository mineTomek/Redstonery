'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'

export default function Button(props: {
  color: ButtonColor
  disabled?: boolean
  icon?: IconProp
  text: string
  onClick?: (router: AppRouterInstance) => void
}) {
  const colors: { [key: string]: string } = {
    primary: 'bg-primary-500',
    warn: 'bg-yellow-500',
    green: 'bg-green-500',
    gray: 'bg-slate-500',
  }

  const router = useRouter()

  return (
    <button
      className={`${colors[props.color]} flex justify-evenly w-3/4 mx-auto p-6 rounded-full items-center`}
      onClick={() => props.onClick != undefined && props.onClick(router)}
    >
      <div className='text-xl font-bold tracking-wide'>{props.text}</div>
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          color='white'
          className='w-8 h-8'
        />
      )}
    </button>
  )
}

export enum ButtonColor {
  Primary = 'primary',
  Warn = 'warn',
  Green = 'green',
  Gray = 'gray',
}
