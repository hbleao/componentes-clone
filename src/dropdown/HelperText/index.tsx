import { joinClasses } from '@porto-ocean/utils'

import './styles.scss'

import { HelperTextProps } from './types'

export const HelperText = ({
  className = '',
  children,
  ...restProps
}: HelperTextProps) => {
  return (
    <p
      className={joinClasses(['dropdown__helper-text', className])}
      {...restProps}
    >
      {children}
    </p>
  )
}
