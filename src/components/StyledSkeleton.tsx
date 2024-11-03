import styled from "styled-components";

import { StyledSkeletonProps } from "../types";
import { createBackground, getAnimation, toPx } from "../utils";

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  animation: ${({ $animation, $direction, $duration }) =>
    $animation
      ? getAnimation({
          animation: $animation,
          direction: $direction,
          duration: $duration,
        })
      : "none"};
  background: ${({ $animation, $background, color, $secondaryColor }) => {
    if ($animation) {
      if ($background) {
        return $background;
      }

      return createBackground({
        animation: $animation,
        color,
        secondaryColor: $secondaryColor,
      });
    }
  }};
  border-radius: ${({ $borderRadius }) => $borderRadius && toPx($borderRadius)};
  height: ${({ height }) => height && toPx(height)};
  margin: ${({ $margin }) => $margin && toPx($margin)};
  width: ${({ width }) => width && toPx(width)};
`;
