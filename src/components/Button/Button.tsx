import React, { FC } from 'react'
import { ButtonBase } from './styles'

interface iProps {
  children: any
  theme: any
  className: string
}

const Button: FC<iProps> = ({ children, theme, className }) => {
  return (
    <ButtonBase theme={theme} className={className}>
      {children}
    </ButtonBase>
  )
}

export default Button
