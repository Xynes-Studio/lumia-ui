"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmLifesaverHelpSafety: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6726 6.87959L12.9623 8.44443C13.1121 9.51573 12.8191 10.6095 12.1536 11.4623L13.7185 14.1727C15.7332 12.3384 16.5003 9.47549 15.6726 6.87959ZM11.1204 15.6727L9.55556 12.9623C8.48426 13.1122 7.39054 12.8191 6.53768 12.1537L3.82731 13.7185C5.66159 15.7332 8.5245 16.5003 11.1204 15.6727ZM14.1726 4.28152L11.4623 5.84635C10.6094 5.18093 9.5157 4.88787 8.4444 5.03771L6.87956 2.32734C9.47546 1.49967 12.3384 2.26679 14.1726 4.28152ZM4.28148 3.82734C2.26675 5.66162 1.49964 8.52453 2.32731 11.1204L5.03768 9.55559C4.88784 8.48429 5.1809 7.39057 5.84632 6.53771L4.28148 3.82734ZM13.5 16.7942C17.8046 14.309 19.2795 8.80464 16.7942 4.50001C14.3089 0.195375 8.80461 -1.2795 4.49998 1.20578C0.195344 3.69106 -1.27953 9.19537 1.20575 13.5C3.69103 17.8046 9.19534 19.2795 13.5 16.7942ZM9.99998 10.7321C10.9566 10.1798 11.2843 8.95659 10.732 8.00001C10.1797 7.04342 8.95656 6.71567 7.99998 7.26796C7.04339 7.82024 6.71564 9.04342 7.26793 10C7.82021 10.9566 9.04339 11.2843 9.99998 10.7321Z" fill={color}/>

    </svg>
  );
};