import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { CustomLinkProps } from '@/interfaces'

export function CustomLink({ action, label, route }: CustomLinkProps): ReactElement {
  return (
    <Link to={route} onClick={() => action()}>
      <span className="font-regular text-l text-background hover:underline">{label}</span>
    </Link>
  )
}
