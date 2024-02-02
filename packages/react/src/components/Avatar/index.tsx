import { ComponentProps } from 'react'
import { User } from '@phosphor-icons/react'
import type * as Stitches from '@stitches/react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps
  extends Stitches.VariantProps<typeof AvatarContainer>,
    ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer size={props.size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User weight="fill" />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
