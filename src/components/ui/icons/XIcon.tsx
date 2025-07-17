import { X } from "lucide-react";
import * as React from "react";

export interface XIconProps extends React.ComponentPropsWithoutRef<typeof X> {}

export function XIcon(props: XIconProps) {
  return <X {...props} />;
} 