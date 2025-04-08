import { joinClasses } from '@porto-ocean/utils'

import './styles.scss'

import { ContentIconCloseProps } from './types'

export const ContentIconClose = ({
  className = '',
  children,
  ...restProps
}: ContentIconCloseProps) => {
  return (
    <div
      className={joinClasses(['modal__content-icon-close', className])}
      {...restProps}
    >
      {children}
    </div>
  )
}
