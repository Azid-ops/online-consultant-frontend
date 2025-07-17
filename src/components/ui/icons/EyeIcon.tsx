import { Eye } from "lucide-react";
import * as React from "react";

export interface EyeIconProps extends React.ComponentPropsWithoutRef<typeof Eye> {}

export function EyeIcon(props: EyeIconProps) {
  return <Eye {...props} />;
} 