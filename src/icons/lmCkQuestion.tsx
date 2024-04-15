"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkQuestion: React.FC<AssetProps> = ({
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
    <g clip-path="url(#clip0_28_61059)">
<path d="M12 0C9.62662 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913445 7.4078C0.00519371 9.60051 -0.232446 12.0133 0.230576 14.3411C0.693599 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33114 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 19C11.7033 19 11.4133 18.912 11.1666 18.7472C10.92 18.5824 10.7277 18.3481 10.6142 18.074C10.5006 17.7999 10.4709 17.4983 10.5288 17.2074C10.5867 16.9164 10.7296 16.6491 10.9393 16.4393C11.1491 16.2296 11.4164 16.0867 11.7074 16.0288C11.9983 15.9709 12.2999 16.0007 12.574 16.1142C12.8481 16.2277 13.0824 16.42 13.2472 16.6666C13.412 16.9133 13.5 17.2033 13.5 17.5C13.5 17.8978 13.342 18.2794 13.0607 18.5607C12.7794 18.842 12.3978 19 12 19ZM13.6 12.92C13.4216 12.9979 13.2698 13.1261 13.1632 13.289C13.0566 13.4519 12.9999 13.6423 13 13.837C13 14.1022 12.8946 14.3566 12.7071 14.5441C12.5196 14.7316 12.2652 14.837 12 14.837C11.7348 14.837 11.4804 14.7316 11.2929 14.5441C11.1054 14.3566 11 14.1022 11 13.837C10.9999 13.2532 11.1702 12.682 11.4899 12.1936C11.8096 11.7051 12.2649 11.3205 12.8 11.087C13.1305 10.9428 13.4159 10.7118 13.6259 10.4187C13.8359 10.1255 13.9627 9.78099 13.993 9.42164C14.0232 9.06228 13.9557 8.70144 13.7976 8.37731C13.6396 8.05317 13.3968 7.77781 13.095 7.58037C12.7932 7.38292 12.4437 7.27075 12.0834 7.25571C11.7231 7.24067 11.3654 7.32334 11.0482 7.49495C10.7311 7.66656 10.4662 7.92074 10.2817 8.23058C10.0971 8.54041 9.99981 8.89438 10 9.255C10 9.52022 9.89464 9.77457 9.70711 9.96211C9.51957 10.1496 9.26522 10.255 9 10.255C8.73478 10.255 8.48043 10.1496 8.29289 9.96211C8.10536 9.77457 8 9.52022 8 9.255C7.99999 8.53384 8.19494 7.82609 8.56423 7.20665C8.93352 6.58721 9.4634 6.07913 10.0978 5.73619C10.7322 5.39324 11.4475 5.22818 12.168 5.25847C12.8886 5.28877 13.5875 5.51329 14.1909 5.90828C14.7942 6.30328 15.2796 6.85404 15.5956 7.50229C15.9116 8.15054 16.0464 8.87216 15.9859 9.59077C15.9253 10.3094 15.6716 10.9983 15.2516 11.5845C14.8316 12.1707 14.261 12.6325 13.6 12.921V12.92Z" fill={color}/>
</g>
<defs >
<clipPath id="clip0_28_61059">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>

    </svg>
  );
};