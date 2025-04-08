import { joinClasses } from '@porto-ocean/utils'

import './styles.scss'

import { HeaderProps } from './types'

export const Header = ({
  className = '',
  children,
  ...restProps
}: HeaderProps) => {
  return (
    <div className={joinClasses(['modal__header', className])} {...restProps}>
      {children}
    </div>
  )
}
