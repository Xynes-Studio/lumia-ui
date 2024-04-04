"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmLightBulbLightbulbIdea: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11226 2.97114C2.49688 3.53789 2 4.47301 2 6C2 6.92872 2.06316 7.46011 2.13193 7.76728C2.1886 8.02041 2.24081 8.08673 2.25153 8.10035L2.25286 8.10205C2.30316 8.16977 2.32516 8.19104 2.38697 8.25081L2.38698 8.25082L2.38699 8.25082C2.44706 8.30891 2.54475 8.40336 2.74255 8.61212C3.07553 8.96356 3.446 9.41986 3.78885 10.1056C4.15418 10.8362 4.41033 11.4678 4.58961 12H7.41039C7.58967 11.4678 7.84582 10.8362 8.21115 10.1056C8.554 9.41986 8.92447 8.96356 9.25745 8.61212C9.45524 8.40337 9.55292 8.30893 9.613 8.25084L9.61301 8.25083L9.61302 8.25082L9.61302 8.25082L9.61303 8.25081C9.67484 8.19104 9.69685 8.16977 9.74714 8.10205L9.74847 8.10035C9.75919 8.08673 9.8114 8.02041 9.86807 7.76728C9.93684 7.46011 10 6.92872 10 6C10 4.47301 9.50311 3.53789 8.88774 2.97114C8.24543 2.37957 7.2658 2 6 2C4.7342 2 3.75457 2.37957 3.11226 2.97114ZM0 6C0 2 2.68629 0 6 0C9.31371 0 12 2 12 6C12 8.69359 11.5196 9.17381 10.9185 9.77457C10.627 10.0659 10.3072 10.3857 10 11C9.57143 11.8571 9.32654 12.5306 9.18659 13.0204C9.03487 13.5514 8.55228 14 8 14H4C3.44772 14 2.96513 13.5514 2.81341 13.0204C2.67346 12.5306 2.42857 11.8571 2 11C1.69283 10.3857 1.37296 10.0659 1.08146 9.77457C0.480442 9.17381 0 8.69359 0 6ZM3 15.5C3 15.2239 3.22386 15 3.5 15H8.5C8.77614 15 9 15.2239 9 15.5V17.741C9 17.9034 8.92167 18.0554 8.78545 18.1439C8.42349 18.3789 7.67059 18.8342 7.05317 18.9875C7.01776 18.9963 6.98125 19 6.94477 19H5.05488C5.0184 19 4.98224 18.9963 4.94683 18.9875C4.32941 18.8342 3.57651 18.3789 3.21455 18.1439C3.07833 18.0554 3 17.9034 3 17.741V15.5ZM5 5.50846L4.99997 5.50837C4.99547 6.05679 4.54949 6.49999 4 6.49999C3.44771 6.49999 3 6.05227 3 5.49999C3 4.98675 3.22666 4.39714 3.59413 3.9378C3.98695 3.44678 4.62826 3 5.5 3C6.05228 3 6.5 3.44772 6.5 4C6.5 4.55228 6.05228 5 5.5 5C5.37174 5 5.26305 5.05321 5.15587 5.18719C5.1001 5.2569 5.05637 5.33682 5.02824 5.41068C5.00796 5.4639 5.00214 5.4968 5.00053 5.50588C5.00022 5.5076 5.00007 5.50847 5 5.50846Z" fill={color}/>

    </svg>
  );
};