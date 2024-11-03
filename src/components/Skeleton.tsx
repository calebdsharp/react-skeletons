import React from "react";

import { SkeletonProps } from "../types";
import { CircleSkeleton } from "./CircleSkeleton";
import { DefaultSkeleton } from "./DefaultSkeleton";

export const Skeleton = ({ variant = "default", ...props }: SkeletonProps) => {
  if (variant === "default") {
    return <DefaultSkeleton {...props} />;
  }

  if (variant === "circle") {
    return <CircleSkeleton {...props} />;
  }
};
