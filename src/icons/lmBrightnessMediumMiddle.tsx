"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmBrightnessMediumMiddle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.5C9.55229 0.5 10 0.947715 10 1.5V2.5C10 3.05228 9.55229 3.5 9 3.5C8.44772 3.5 8 3.05228 8 2.5V1.5C8 0.947715 8.44772 0.5 9 0.5ZM9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11ZM9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13ZM10 15.5C10 14.9477 9.55229 14.5 9 14.5C8.44772 14.5 8 14.9477 8 15.5V16.5C8 17.0523 8.44772 17.5 9 17.5C9.55229 17.5 10 17.0523 10 16.5V15.5ZM17.5 9C17.5 9.55229 17.0523 10 16.5 10H15.5C14.9477 10 14.5 9.55228 14.5 9C14.5 8.44772 14.9477 8 15.5 8H16.5C17.0523 8 17.5 8.44772 17.5 9ZM2.5 10C3.05228 10 3.5 9.55229 3.5 9C3.5 8.44772 3.05228 8 2.5 8H1.5C0.947715 8 0.5 8.44772 0.5 9C0.5 9.55228 0.947715 10 1.5 10H2.5ZM15.0104 4.40381L14.3033 5.11091C13.9128 5.50144 13.2796 5.50144 12.8891 5.11091C12.4986 4.72039 12.4986 4.08723 12.8891 3.6967L13.5962 2.98959C13.9867 2.59907 14.6199 2.59907 15.0104 2.98959C15.4009 3.38012 15.4009 4.01328 15.0104 4.40381ZM4.40381 15.0104L5.11092 14.3033C5.50144 13.9128 5.50144 13.2796 5.11092 12.8891C4.72039 12.4986 4.08723 12.4986 3.6967 12.8891L2.98959 13.5962C2.59907 13.9867 2.59907 14.6199 2.98959 15.0104C3.38012 15.4009 4.01328 15.4009 4.40381 15.0104ZM13.5962 15.0104L12.8891 14.3033C12.4986 13.9128 12.4986 13.2796 12.8891 12.8891C13.2796 12.4986 13.9128 12.4986 14.3033 12.8891L15.0104 13.5962C15.4009 13.9867 15.4009 14.6199 15.0104 15.0104C14.6199 15.4009 13.9867 15.4009 13.5962 15.0104ZM3.6967 5.11092C4.08723 5.50144 4.72039 5.50144 5.11092 5.11092C5.50144 4.72039 5.50144 4.08723 5.11092 3.6967L4.40381 2.98959C4.01328 2.59907 3.38012 2.59907 2.9896 2.98959C2.59907 3.38012 2.59907 4.01328 2.98959 4.40381L3.6967 5.11092Z" fill={color}/>

    </svg>
  );
};