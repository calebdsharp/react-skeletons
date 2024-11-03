import React from "react";

import { StyledSkeleton } from "./StyledSkeleton";
import { DefaultSkeletonValues } from "../constants";
import { SkeletonProps } from "../types";

export const DefaultSkeleton = ({
  animation = DefaultSkeletonValues.animation,
  background = DefaultSkeletonValues.background,
  borderRadius = DefaultSkeletonValues.borderRadius,
  color = DefaultSkeletonValues.color,
  direction = DefaultSkeletonValues.direction,
  duration = DefaultSkeletonValues.duration,
  height = DefaultSkeletonValues.height,
  margin = DefaultSkeletonValues.margin,
  secondaryColor = DefaultSkeletonValues.secondaryColor,
  width = DefaultSkeletonValues.width,
}: SkeletonProps) => (
  <StyledSkeleton
    $animation={animation}
    $background={background}
    $borderRadius={borderRadius}
    color={color}
    $direction={direction}
    $duration={duration}
    height={height}
    $margin={margin}
    $secondaryColor={secondaryColor}
    $variant="default"
    width={width}
  />
);
