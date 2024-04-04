"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPersonSittingElderly: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5 3.10457 4.10457 4 3 4C1.89543 4 1 3.10457 1 2C1 0.895431 1.89543 0 3 0C4.10457 0 5 0.895431 5 2ZM1.1405 6.12403C1.0659 5.52718 1.53128 5 2.13278 5H4.23444C4.27133 5 4.30801 5.001 4.34445 5.00299C4.36755 5.00302 4.3908 5.00385 4.41419 5.00549L10.4231 5.42803C10.974 5.46677 11.3892 5.94478 11.3505 6.49571C11.3117 7.04663 10.8337 7.46184 10.2828 7.4231L6.26759 7.14076L6.625 10H8.55848C9.41934 10 10.1836 10.5509 10.4558 11.3675L11 13L12.1967 16.9891C12.3479 17.4929 11.9706 18 11.4446 18C11.1688 18 10.9132 17.8553 10.7713 17.6188L8 13H7H4H3.76556C2.75692 13 1.90612 12.2489 1.78101 11.2481L1.1405 6.12403ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H6.5C7.05228 16 7.5 15.5523 7.5 15C7.5 14.4477 7.05228 14 6.5 14H1ZM14.5032 4.25C13.9267 4.25 13.4499 4.43052 13.0856 4.74421C12.735 5.0462 12.5384 5.42827 12.4262 5.75929C12.3136 6.09149 12.2727 6.41124 12.2579 6.63901C12.2504 6.75513 12.2493 6.85304 12.2503 6.9242C12.2508 6.9599 12.2518 6.98923 12.2528 7.01113L12.2542 7.03842L12.2547 7.04773L12.255 7.05127L12.2551 7.05275L12.2551 7.05342C12.2552 7.05374 12.2552 7.05404 13.0032 7L12.2552 7.05404C12.285 7.46718 12.6441 7.7779 13.0573 7.74805C13.4691 7.7183 13.7792 7.36135 13.7516 6.94986L13.7513 6.94394C13.7509 6.93655 13.7504 6.92291 13.7502 6.90393C13.7496 6.86571 13.7502 6.80737 13.7548 6.73599C13.7643 6.58876 13.79 6.40851 13.8469 6.24071C13.9041 6.07173 13.9797 5.9538 14.0645 5.88079C14.1357 5.81948 14.2575 5.75 14.5032 5.75C14.7489 5.75 14.8708 5.81948 14.9419 5.88079C15.0267 5.9538 15.1023 6.07173 15.1596 6.24071C15.2165 6.40851 15.2421 6.58876 15.2517 6.73599C15.2563 6.80737 15.2568 6.86571 15.2563 6.90393C15.256 6.92291 15.2555 6.93655 15.2552 6.94394L15.2549 6.94937L15.2549 6.94941L15.2532 6.97294V7V17C15.2532 17.4142 15.589 17.75 16.0032 17.75C16.4174 17.75 16.7532 17.4142 16.7532 17V7.02023L16.7537 7.01113C16.7547 6.98923 16.7557 6.9599 16.7562 6.9242C16.7571 6.85304 16.7561 6.75513 16.7485 6.63901C16.7338 6.41124 16.6928 6.09149 16.5802 5.75929C16.4681 5.42827 16.2715 5.0462 15.9208 4.74421C15.5566 4.43052 15.0798 4.25 14.5032 4.25Z" fill={color}/>

    </svg>
  );
};