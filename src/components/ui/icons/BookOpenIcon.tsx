import { BookOpen } from "lucide-react";
import * as React from "react";

export interface BookOpenIconProps extends React.ComponentPropsWithoutRef<typeof BookOpen> {}

export function BookOpenIcon(props: BookOpenIconProps) {
  return <BookOpen {...props} />;
} 