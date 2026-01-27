import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-background " +
    "disabled:pointer-events-none disabled:opacity-50 " +
    "active:translate-y-[1px] active:shadow-none " +
    "[&>svg]:pointer-events-none [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        // CarWorlds ROT (clean, wenig Weiß)
        default:
          "relative overflow-hidden bg-red-600 text-white shadow-lg shadow-red-600/25 " +
          "hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 " +
          "focus-visible:ring-red-600 " +
          // sehr subtiler “sheen” (optional, kaum weiß)
          "after:absolute after:inset-0 after:content-[''] after:pointer-events-none " +
          "after:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),transparent_55%)]",
        // Secondary: soft red chip/button
        secondary:
          "bg-red-600/10 text-red-700 border border-red-600/25 " +
          "hover:bg-red-600/15 hover:border-red-600/35 " +
          "dark:text-red-300 dark:border-red-500/25 dark:hover:border-red-500/35",
        // Outline bleibt neutral-glassy
        outline:
          "border border-border bg-background/60 backdrop-blur shadow-sm " +
          "hover:bg-accent hover:text-accent-foreground hover:shadow-md",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-red-600 underline-offset-4 hover:underline dark:text-red-400",
        destructive:
          "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/20 " +
          "hover:bg-destructive/90 hover:shadow-xl hover:shadow-destructive/25",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 rounded-xl px-4",
        lg: "h-12 px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
