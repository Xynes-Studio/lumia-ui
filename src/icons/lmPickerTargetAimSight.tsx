"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPickerTargetAimSight: React.FC<AssetProps> = ({
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0C8.55228 0 9 0.447715 9 1V2.08296C11.5125 2.50448 13.4955 4.4875 13.917 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H13.917C13.4955 11.5125 11.5125 13.4955 9 13.917V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V13.917C4.4875 13.4955 2.50448 11.5125 2.08296 9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H2.08296C2.50448 4.4875 4.4875 2.50448 7 2.08296V1C7 0.447715 7.44772 0 8 0ZM8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
        fill={color}
      />
    </svg>
  );
};
