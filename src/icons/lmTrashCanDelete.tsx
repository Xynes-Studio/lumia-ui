"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmTrashCanDelete: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.44152 0C5.15023 0 4.00381 0.82629 3.59547 2.05132L3.27924 3H2H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V17C1 17.5523 1.44772 18 2 18H12C12.5523 18 13 17.5523 13 17V5C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H12H10.7208L10.4045 2.05132C9.99619 0.82629 8.84977 0 7.55848 0H6.44152ZM11 5H10H4H3V16H11V5ZM8.61257 3L8.50716 2.68377C8.37105 2.27543 7.98891 2 7.55848 2H6.44152C6.01109 2 5.62895 2.27543 5.49284 2.68377L5.38743 3H8.61257Z" fill={color}/>

    </svg>
  );
};