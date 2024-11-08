import { CSSProperties } from "react";

import { Background, BackgroundProps } from "./background";
import { Animation } from "./animation";

type BorderRadius = CSSProperties["borderRadius"];

export type Direction = "ltr" | "rtl";

type Margin = CSSProperties["margin"];

type Variant = "circle" | "default";

export interface SkeletonProps extends BackgroundProps {
  animation?: Animation;
  background?: Background;
  borderRadius?: BorderRadius;
  direction?: Direction;
  disabled?: boolean;
  duration?: number;
  height?: string;
  id?: string | null;
  margin?: Margin;
  style?: CSSProperties;
  variant?: Variant;
  width?: string;
}

export interface StyledSkeletonProps
  extends Omit<
    SkeletonProps,
    | "animation"
    | "background"
    | "borderRadius"
    | "direction"
    | "duration"
    | "margin"
    | "secondaryColor"
    | "variant"
  > {
  $animation?: Animation;
  $background?: Background;
  $borderRadius?: BorderRadius;
  $direction?: Direction;
  $duration?: number;
  $margin?: Margin;
  $secondaryColor?: string;
  $variant?: Variant;
}
