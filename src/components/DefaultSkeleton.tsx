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
  disabled = DefaultSkeletonValues.disabled,
  duration = DefaultSkeletonValues.duration,
  height = DefaultSkeletonValues.height,
  id = DefaultSkeletonValues.id,
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
    disabled={disabled}
    $duration={duration}
    height={height}
    id={id}
    $margin={margin}
    $secondaryColor={secondaryColor}
    $variant="default"
    width={width}
  />
);
