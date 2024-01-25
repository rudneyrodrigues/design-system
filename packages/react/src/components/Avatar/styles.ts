import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  overflow: 'hidden',
  borderRadius: '$full',
  display: 'inline-block',

  variants: {
    size: {
      sm: {
        width: '$10',
        height: '$10',
      },

      md: {
        width: '$12',
        height: '$12',
      },

      lg: {
        width: '$16',
        height: '$16',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  color: '$zinc50',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$zinc700',

  svg: {
    width: '$6',
  },
})
