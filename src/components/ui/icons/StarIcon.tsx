import { Star } from "lucide-react";
import * as React from "react";

export interface StarIconProps extends React.ComponentPropsWithoutRef<typeof Star> {}

export function StarIcon(props: StarIconProps) {
  return <Star {...props} />;
} 