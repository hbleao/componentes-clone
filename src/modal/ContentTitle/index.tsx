import { Typography } from '@porto-ocean/typography'
import { joinClasses } from '@porto-ocean/utils'

import './styles.scss'

import { ContentTitleProps } from './types'

export const ContentTitle = ({
  as = 'h3',
  weight = 'medium',
  variant = 'title4',
  className = '',
  children,
  ...restProps
}: ContentTitleProps) => {
  return (
    <Typography
      as={as}
      variant={variant}
      weight={weight}
      className={joinClasses(['modal__content-title', className])}
      {...restProps}
    >
      {children}
    </Typography>
  )
}
