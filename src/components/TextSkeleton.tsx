import React, { CSSProperties } from "react";
import styled, { css, keyframes } from "styled-components";

import { Animation } from "../types/index";

export interface TextSkeletonProps {
  $animation?: Animation;
  color?: string;
  height?: string;
  $secondaryColor?: string;
  style?: CSSProperties;
  width?: string;
}

const TextSkeletonDefaultValues: TextSkeletonProps = {
  $animation: "wave",
  color: "",
  height: "",
  $secondaryColor: "#f0f0f0",
  width: "",
};

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

const waveAnimation = keyframes`
  to {
    background-position: -200% 0;
  }
`;

const animations = {
  fade: css`
    ${fadeAnimation} 2s infinite
  `,
  pulse: css`
    ${pulseAnimation} 1.5s infinite
  `,
  wave: css`
    ${waveAnimation} 1.5s linear infinite
  `,
};

const createBackground = (props: {
  $animation?: Animation;
  color?: string;
  $secondaryColor?: string;
}) => ({
  animation: props.$animation || TextSkeletonDefaultValues.$animation,
  color: props.color || TextSkeletonDefaultValues.color,
  $secondaryColor:
    props.$secondaryColor || TextSkeletonDefaultValues.$secondaryColor,
  background: function () {
    if (this.animation === "wave") {
      return `linear-gradient(90deg, ${this.color} 25%, ${this.$secondaryColor} 50%, ${this.color} 75%) left/200% 100%`;
    }
  },
});

const BaseStyes = css`
  border-radius: 4px;
  margin: 8px 0;
`;

const SkeletonWrapper = styled.div<TextSkeletonProps>`
  ${BaseStyes};
  animation: ${({ $animation }) =>
    $animation !== undefined ? animations[$animation] : "none"};
  background: ${(props) => createBackground(props).background()};
  ${({ style = {} }) => ({ ...style })};
`;

const TextSkeleton = ({
  $animation,
  color = TextSkeletonDefaultValues.color,
  height = TextSkeletonDefaultValues.height,
  $secondaryColor = TextSkeletonDefaultValues.$secondaryColor,
  style = {},
  width = TextSkeletonDefaultValues.width,
}: TextSkeletonProps) => {
  const combinedStyle: CSSProperties = {
    ...style,
    ...(color ? { color } : { color: style.color || "#e0e0e0" }),
    ...(height ? { height } : { height: style.height || "1em" }),
    ...(width ? { width } : { width: style.width || "100%" }),
  };

  return (
    <SkeletonWrapper
      $animation={$animation}
      color={color}
      $secondaryColor={$secondaryColor}
      style={combinedStyle}
    />
  );
};

export default TextSkeleton;
