import React from "react";

import { StyledSkeleton } from "./StyledSkeleton";
import { CircleSkeletonDefaultValues } from "../constants";
import { SkeletonProps } from "../types";

export const CircleSkeleton = ({
  animation = CircleSkeletonDefaultValues.animation,
  background = CircleSkeletonDefaultValues.background,
  color = CircleSkeletonDefaultValues.color,
  direction = CircleSkeletonDefaultValues.direction,
  disabled = CircleSkeletonDefaultValues.disabled,
  duration = CircleSkeletonDefaultValues.duration,
  height = CircleSkeletonDefaultValues.height,
  margin = CircleSkeletonDefaultValues.margin,
  secondaryColor = CircleSkeletonDefaultValues.secondaryColor,
  width = CircleSkeletonDefaultValues.width,
}: SkeletonProps) => (
  <StyledSkeleton
    $animation={animation}
    $background={background}
    $borderRadius="50%"
    color={color}
    $direction={direction}
    disabled={disabled}
    $duration={duration}
    height={height}
    $margin={margin}
    $secondaryColor={secondaryColor}
    $variant="circle"
    width={width}
  />
);
