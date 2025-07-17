import { Filter } from "lucide-react";
import * as React from "react";

export interface FilterIconProps extends React.ComponentPropsWithoutRef<typeof Filter> {}

export function FilterIcon(props: FilterIconProps) {
  return <Filter {...props} />;
} 