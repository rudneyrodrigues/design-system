import { ReactNode, ButtonHTMLAttributes } from 'react'

import { Container, ButtonVariants } from './styles'

// export interface ButtonProps
//   extends ButtonHTMLAttributes<HTMLButtonElement>,
//     ButtonVariants {}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    leftIcon?: ReactNode
    rightIcon?: ReactNode
  }

export function Button({
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <Container {...props}>
      {!!leftIcon && leftIcon}

      {children}

      {!!rightIcon && rightIcon}
    </Container>
  )
}
