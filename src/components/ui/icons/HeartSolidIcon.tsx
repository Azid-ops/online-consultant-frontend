import { Heart } from "lucide-react";
import * as React from "react";

export interface HeartSolidIconProps extends React.ComponentPropsWithoutRef<typeof Heart> {}

export function HeartSolidIcon({ className, ...props }: HeartSolidIconProps) {
  return <Heart className={className} fill="currentColor" {...props} />;
} 