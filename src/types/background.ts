import { CSSProperties } from "react";

export type Background = CSSProperties["background"];

export type BackgroundProps = {
  color?: CSSProperties["color"];
  secondaryColor?: string;
};
