import React, { FC } from 'react'
import { defaultTheme } from '../../theme'
import classNamesGenerator from '../../theme/classNamesGenerator'
import { COMPONENT_CLASS_NAME, ButtonBase, Sizes, Variants, Colors } from './styles'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  theme?: any
  size?: Sizes
  variant?: Variants
  color?: Colors
}

const Button: FC<Props> = ({
  children,
  theme,
  size = 'md',
  variant = 'contained',
  color = 'primary'
}) => {
  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color]
  })

  return (
    <ButtonBase theme={theme} className={classNames}>
      {children}
    </ButtonBase>
  )
}

export default Button
