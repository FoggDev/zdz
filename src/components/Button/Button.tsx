import React, { FC } from 'react'
import classNamesGenerator from '../../theme/classNamesGenerator'
import { COMPONENT_CLASS_NAME, ButtonBase, Sizes, Variants, Colors } from './styles'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
  color?: Colors
}

const Button: FC<Props> = ({ children, size = 'md', variant = 'contained', color = 'primary' }) => {
  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color]
  })

  return <ButtonBase className={classNames}>{children}</ButtonBase>
}

export default Button
