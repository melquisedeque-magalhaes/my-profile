import { ComponentProps, ReactNode } from 'react'

interface ButtonPrimaryProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function ButtonPrimary({ children, ...rest }: ButtonPrimaryProps) {
  return (
    <button
      {...rest}
      className="w-full flex items-center py-4 sm:px-6 text-base px-4 justify-between rounded-lg bg-primary-500 hover:opacity-90 transition-opacity"
    >
      {children}
    </button>
  )
}
