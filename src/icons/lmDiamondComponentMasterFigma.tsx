"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmDiamondComponentMasterFigma: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 5.17157L7.82843 4L9 2.82842L10.1716 4L9 5.17157ZM5.5 4.49999C5.22386 4.22385 5.22386 3.77614 5.5 3.5L8.5 0.499995C8.77615 0.223853 9.22386 0.223853 9.5 0.499996L12.5 3.5C12.7761 3.77614 12.7761 4.22385 12.5 4.5L9.5 7.5C9.22386 7.77614 8.77615 7.77614 8.5 7.5L5.5 4.49999ZM4.00001 10.1716L2.82844 9L4.00001 7.82843L5.17158 9L4.00001 10.1716ZM0.500007 9.5C0.223865 9.22386 0.223866 8.77614 0.500008 8.5L3.50001 5.5C3.77615 5.22386 4.22387 5.22386 4.50001 5.5L7.50001 8.5C7.77615 8.77614 7.77615 9.22386 7.50001 9.5L4.50001 12.5C4.22386 12.7761 3.77615 12.7761 3.50001 12.5L0.500007 9.5ZM7.82843 14L9 15.1716L10.1716 14L9 12.8284L7.82843 14ZM5.5 13.5C5.22386 13.7761 5.22386 14.2239 5.5 14.5L8.5 17.5C8.77615 17.7761 9.22386 17.7761 9.5 17.5L12.5 14.5C12.7761 14.2239 12.7761 13.7761 12.5 13.5L9.5 10.5C9.22386 10.2239 8.77615 10.2239 8.5 10.5L5.5 13.5ZM14 10.1716L12.8284 9L14 7.82843L15.1716 9L14 10.1716ZM10.5 9.5C10.2239 9.22386 10.2239 8.77614 10.5 8.5L13.5 5.5C13.7762 5.22386 14.2239 5.22386 14.5 5.5L17.5 8.5C17.7762 8.77614 17.7762 9.22386 17.5 9.5L14.5 12.5C14.2239 12.7761 13.7762 12.7761 13.5 12.5L10.5 9.5Z" fill={color}/>

    </svg>
  );
};