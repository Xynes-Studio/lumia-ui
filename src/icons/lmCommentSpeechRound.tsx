"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCommentSpeechRound: React.FC<AssetProps> = ({
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
    <path d="M4 12C4 11.5911 3.75105 11.2234 3.37139 11.0715C3.14084 10.9793 2.52928 10.5989 1.97792 9.88743C1.44539 9.2003 1 8.24402 1 7C1 3.90561 4.33328 1 9 1C11.3185 1 13.3467 1.62235 14.7683 2.67657C16.1682 3.71466 17 5.17827 17 7C17 8.67369 16.2826 10.0068 15.025 10.95C13.7418 11.9124 11.8455 12.5 9.5 12.5C9.2966 12.5 9.09803 12.562 8.93079 12.6778L4 16.0914V12Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    </svg>
  );
};