import { Heart } from "lucide-react";
import * as React from "react";

export interface HeartIconProps extends React.ComponentPropsWithoutRef<typeof Heart> {}

export function HeartIcon(props: HeartIconProps) {
  return <Heart {...props} />;
} 