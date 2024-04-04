"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPersonSittingInjuredHandicap: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5 3.10457 4.10457 4 3 4C1.89543 4 1 3.10457 1 2C1 0.895431 1.89543 0 3 0C4.10457 0 5 0.895431 5 2ZM1.1405 6.12403C1.0659 5.52718 1.53128 5 2.13278 5H4.23444C4.27133 5 4.30801 5.001 4.34445 5.00299C4.36755 5.00302 4.3908 5.00385 4.41419 5.00549L10.4231 5.42803C10.974 5.46677 11.3892 5.94478 11.3505 6.49571C11.3117 7.04663 10.8337 7.46184 10.2828 7.4231L6.26759 7.14076L6.625 10H8.55848C9.41934 10 10.1836 10.5509 10.4558 11.3675L11 13L12.1967 16.9891C12.3479 17.4929 11.9706 18 11.4446 18C11.1688 18 10.9132 17.8553 10.7713 17.6188L8 13H7H4H3.76556C2.75692 13 1.90612 12.2489 1.78101 11.2481L1.1405 6.12403ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H6.5C7.05228 16 7.5 15.5523 7.5 15C7.5 14.4477 7.05228 14 6.5 14H1ZM12 1.75C11.5858 1.75 11.25 2.08579 11.25 2.5C11.25 2.91421 11.5858 3.25 12 3.25H12.25V8.75C12.25 9.09216 12.4791 9.3808 12.7923 9.47087L13.2514 17.0454C13.2751 17.4368 13.5964 17.7439 13.9886 17.7499C14.3807 17.7559 14.7113 17.4587 14.7469 17.0682L15.4396 9.47655C15.7634 9.39352 16.0028 9.09971 16.0028 8.75V3.25H16.2528C16.667 3.25 17.0028 2.91421 17.0028 2.5C17.0028 2.08579 16.667 1.75 16.2528 1.75H15.2528H13H12ZM13.75 8V3.25H14.5028V8H13.75Z" fill={color}/>

    </svg>
  );
};