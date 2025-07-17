import { GraduationCap } from "lucide-react";
import * as React from "react";

export interface GraduationCapIconProps extends React.ComponentPropsWithoutRef<typeof GraduationCap> {}

export function GraduationCapIcon(props: GraduationCapIconProps) {
  return <GraduationCap {...props} />;
} 