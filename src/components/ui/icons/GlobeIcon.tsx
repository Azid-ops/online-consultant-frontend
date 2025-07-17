import { Globe } from "lucide-react";
import * as React from "react";

export interface GlobeIconProps extends React.ComponentPropsWithoutRef<typeof Globe> {}

export function GlobeIcon(props: GlobeIconProps) {
  return <Globe {...props} />;
} 