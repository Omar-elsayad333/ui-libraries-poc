import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 px-6 py-2 h-12"

const variantClasses = {
  primary:
    "bg-black text-white hover:bg-[#FD9FFD] hover:text-black disabled:bg-gray-200 disabled:text-gray-400 border-none",
  outline:
    "bg-white text-black border border-black hover:bg-[#FD9FFD] hover:text-black disabled:bg-gray-200 disabled:text-gray-400",
} as const

type ButtonVariant = "primary" | "outline"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  asChild?: boolean
}

function Button({
  className,
  variant = "primary",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonBase, variantClasses[variant], className)}
      {...props}
    />
  )
}

export default Button
