"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmRubleMoneyCurrency: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(24, 24, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9.58966 12.3713C9.8658 12.3713 10.0897 12.1474 10.0897 11.8713V11.4474C10.0897 11.1713 9.8658 10.9474 9.58966 10.9474H8.22638V10.5021H9.75568C10.7752 10.5021 11.5701 10.258 12.1404 9.76971C12.7147 9.28143 13.0018 8.61542 13.0018 7.77167C13.0018 7.22479 12.867 6.73846 12.5975 6.31268C12.3318 5.883 11.9568 5.55292 11.4725 5.32245C10.9881 5.09198 10.4256 4.97675 9.78497 4.97675H6.96857C6.69242 4.97675 6.46857 5.2006 6.46857 5.47675V9.07831H5.77911C5.50297 9.07831 5.27911 9.30217 5.27911 9.57831V10.0021C5.27911 10.2783 5.50297 10.5021 5.77911 10.5021H6.46857V10.9474H5.77911C5.50297 10.9474 5.27911 11.1713 5.27911 11.4474V11.8713C5.27911 12.1474 5.50297 12.3713 5.77911 12.3713H6.46857V13.008C6.46857 13.2841 6.69242 13.508 6.96857 13.508H7.72638C8.00252 13.508 8.22638 13.2841 8.22638 13.008V12.3713H9.58966ZM9.74396 9.07831H8.22638V6.40643H9.80841C10.2498 6.41034 10.5955 6.53925 10.8455 6.79315C11.0955 7.04315 11.2205 7.37323 11.2205 7.78339C11.2205 8.64667 10.7283 9.07831 9.74396 9.07831Z" fill={color}/>

    </svg>
  );
};