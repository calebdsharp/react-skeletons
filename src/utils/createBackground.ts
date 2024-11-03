import { Animation } from "../types";

type CreateBackground = {
  animation: Animation;
  color?: string;
  secondaryColor?: string;
};

export const createBackground = ({
  animation,
  color,
  secondaryColor,
}: CreateBackground) => {
  switch (animation) {
    case "fade":
      return `linear-gradient(to right, ${color} 0%, ${secondaryColor} 40%, ${color} 60%, ${secondaryColor} 100%)`;
    case "pulse":
      return `linear-gradient(90deg, ${color} 0%, ${secondaryColor} 50%, ${color} 100%)`;
    case "slide":
      return `linear-gradient(90deg, ${color} 25%, ${secondaryColor} 50%, ${color} 75%) left/200% 100%`;
    default:
      throw new Error(`Unsupported animation: ${animation}`);
  }
};
