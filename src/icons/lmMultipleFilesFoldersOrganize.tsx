"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmMultipleFilesFoldersOrganize: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C2.44772 0 2 0.447715 2 1C2 1.55228 2.44772 2 3 2H7.21907L8.82038 3.48356L9.10796 3.75H9.5H16V15C16 15.5523 16.4477 16 17 16C17.5523 16 18 15.5523 18 15V3.75C18 2.64543 17.1046 1.75 16 1.75H9.89204L8.57832 0.532877C8.20857 0.190318 7.72312 0 7.21907 0H3ZM6.59697 7.1753L7.18078 7.75H8H12V16H2V6H5.40301L6.59697 7.1753ZM6.51413 4.28735L8 5.75H13C13.5523 5.75 14 6.19772 14 6.75V17C14 17.5523 13.5523 18 13 18H1C0.447716 18 0 17.5523 0 17V5C0 4.44772 0.447715 4 1 4H5.81261C6.0751 4 6.32707 4.10321 6.51413 4.28735Z" fill={color}/>

    </svg>
  );
};