import { joinClasses } from '@porto-ocean/utils'

import './styles.scss'

import { OverlayProps } from './types'

export const Overlay = ({
  className = '',
  children,
  ...restProps
}: OverlayProps) => {
  return (
    <div className={joinClasses(['modal__overlay', className])} {...restProps}>
      {children}
    </div>
  )
}
