import { Users } from "lucide-react";
import * as React from "react";

export interface UsersIconProps extends React.ComponentPropsWithoutRef<typeof Users> {}

export function UsersIcon(props: UsersIconProps) {
  return <Users {...props} />;
} 