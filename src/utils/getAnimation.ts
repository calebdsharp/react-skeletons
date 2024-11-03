import { css, keyframes } from "styled-components";

import { AnimationProps } from "../types";

const fadeAnimation = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
`;

const pulseAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const slideLeftAnimation = keyframes`
  from {
    background-position: 0% 0;
  }
  to {
    background-position: 200% 0;
  }
`;

const slideRightAnimation = keyframes`
  to {
    background-position: -200% 0;
  }
`;

export const getAnimation = ({
  animation,
  direction,
  duration,
}: AnimationProps) => {
  switch (animation) {
    case "fade":
      return css`
        ${fadeAnimation} ${duration}s infinite;
      `;
    case "pulse":
      return css`
        ${pulseAnimation} ${duration}s infinite;
      `;
    case "slide":
      return css`
        ${direction === "ltr"
          ? slideRightAnimation
          : slideLeftAnimation} ${duration}s linear infinite;
      `;
    default:
      throw new Error(`Unsupported animation: ${animation}`);
  }
};
