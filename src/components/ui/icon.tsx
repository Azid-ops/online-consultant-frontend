import * as React from "react"

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: "sm" | "default" | "lg" | "xl" | "2xl"
  variant?: "default" | "outline" | "ghost" | "secondary"
}

const sizeClasses = {
  sm: "h-3 w-3",
  default: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
  "2xl": "h-8 w-8",
}

const variantClasses = {
  default: "text-gray-900",
  outline: "border border-gray-300 text-gray-700",
  ghost: "text-gray-600 hover:text-gray-900",
  secondary: "text-gray-500",
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, size = "default", variant = "default", children, ...props }, ref) => {
    return (
      <div
        className={`inline-flex items-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className || ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Icon.displayName = "Icon"

export { Icon } 