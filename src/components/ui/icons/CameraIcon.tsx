import { Camera } from "lucide-react";
import * as React from "react";

export interface CameraIconProps extends React.ComponentPropsWithoutRef<typeof Camera> {}

export function CameraIcon(props: CameraIconProps) {
  return <Camera {...props} />;
} 