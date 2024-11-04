import { SkeletonProps } from "../types";

export const DefaultSkeletonValues: SkeletonProps = {
  animation: "slide",
  background: undefined,
  borderRadius: "4px",
  color: "#a4a4a2",
  direction: "ltr",
  disabled: false,
  duration: 1.5,
  height: "1em",
  margin: "8px 0",
  secondaryColor: "#f0f0f0",
  style: {},
  variant: "default",
  width: "100%",
};

export const CircleSkeletonDefaultValues: SkeletonProps = {
  ...DefaultSkeletonValues,
  height: "3em",
  width: "3em",
};
