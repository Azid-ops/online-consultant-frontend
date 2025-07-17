import { Award } from "lucide-react";
import * as React from "react";

export interface AwardIconProps extends React.ComponentPropsWithoutRef<typeof Award> {}

export function AwardIcon(props: AwardIconProps) {
  return <Award {...props} />;
} 