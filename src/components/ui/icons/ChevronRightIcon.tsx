import { ChevronRight } from "lucide-react";
import * as React from "react";

export interface ChevronRightIconProps extends React.ComponentPropsWithoutRef<typeof ChevronRight> {}

export function ChevronRightIcon(props: ChevronRightIconProps) {
  return <ChevronRight {...props} />;
} 