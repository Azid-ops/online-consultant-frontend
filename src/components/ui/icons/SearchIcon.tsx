import { Search } from "lucide-react";
import * as React from "react";

export interface SearchIconProps extends React.ComponentPropsWithoutRef<typeof Search> {}

export function SearchIcon(props: SearchIconProps) {
  return <Search {...props} />;
} 