import React from "react";

import { CircleSkeleton } from "./CircleSkeleton";
import { DefaultSkeleton } from "./DefaultSkeleton";
import { SkeletonProps } from "../types";

export const Skeleton = ({
  count = 1,
  variant = "default",
  ...props
}: SkeletonProps) => {
  return Array.from({ length: count }).map((_, index) => {
    if (variant === "default") {
      return <DefaultSkeleton key={index} {...props} />;
    }

    if (variant === "circle") {
      return <CircleSkeleton key={index} {...props} />;
    }
  });
};
