import { Typography } from '@porto-ocean/typography'
import { joinClasses } from '@porto-ocean/utils'

import './styles.scss'

import { TitleProps } from './types'

export const Title = ({
  as = 'h2',
  weight = 'medium',
  variant = 'body1',
  className = '',
  children,
  ...restProps
}: TitleProps) => {
  return (
    <Typography
      as={as}
      variant={variant}
      weight={weight}
      className={joinClasses(['modal__title', className])}
      {...restProps}
    >
      {children}
    </Typography>
  )
}
