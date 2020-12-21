import React from 'react'
import classNamesGenerator from '../../theme/classNamesGenerator'
import { COMPONENT_CLASS_NAME, ButtonBase, Sizes, Variants, Colors } from './styles'
import { Theme } from '../../theme/theme'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
  color?: Colors
  theme?: Theme
}

const Button: React.FC<Props> = props => {
  const { children, size = 'md', variant = 'contained', color = 'primary', ...btnProps } = props
  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color]
  })
  console.log('PROPS====>>>>', props)
  console.log('btnProps====', btnProps)
  return (
    <ButtonBase className={classNames} {...btnProps}>
      {children}
    </ButtonBase>
  )
}

export default Button
