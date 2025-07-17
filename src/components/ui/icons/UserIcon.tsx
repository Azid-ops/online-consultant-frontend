import { User } from "lucide-react";
import * as React from "react";

export interface UserIconProps extends React.ComponentPropsWithoutRef<typeof User> {}

export function UserIcon(props: UserIconProps) {
  return <User {...props} />;
} 