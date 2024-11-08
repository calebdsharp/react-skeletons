import styled, { DataAttributes } from "styled-components";

import { StyledSkeletonProps } from "../types";
import { createBackground, getAnimation, toPx } from "../utils";

export const StyledSkeleton = styled.div.attrs<
  StyledSkeletonProps & DataAttributes
>((props) => ({
  "data-testid": props.id || null,
}))`
  animation: ${({ $animation, $direction, disabled, $duration }) => {
    if (disabled) {
      return "none";
    }
    if ($animation) {
      return getAnimation({
        animation: $animation,
        direction: $direction,
        duration: $duration,
      });
    } else {
      return "none";
    }
  }};
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
  id: ${({ id }) => id && id};
  margin: ${({ $margin }) => $margin && toPx($margin)};
  width: ${({ width }) => width && toPx(width)};
`;
