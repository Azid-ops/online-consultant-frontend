import { MapPin } from "lucide-react";
import * as React from "react";

export interface MapPinIconProps extends React.ComponentPropsWithoutRef<typeof MapPin> {}

export function MapPinIcon(props: MapPinIconProps) {
  return <MapPin {...props} />;
} 