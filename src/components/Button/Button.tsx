import React, { FC } from 'react'
import { ButtonBase } from './styles'

const Button: FC = ({ children, theme }: { children: any; theme: any }) => {
  return <ButtonBase theme={theme}>{children}</ButtonBase>
}

export default Button
