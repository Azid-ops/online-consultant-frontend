import { Save } from "lucide-react";
import * as React from "react";

export interface SaveIconProps extends React.ComponentPropsWithoutRef<typeof Save> {}

export function SaveIcon(props: SaveIconProps) {
  return <Save {...props} />;
} 