import { Direction } from "./index";

export type Animation = "fade" | "pulse" | "slide";

export type AnimationProps = {
  animation?: Animation;
  direction?: Direction;
  duration?: number;
};
