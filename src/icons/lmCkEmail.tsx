"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkEmail: React.FC<AssetProps> = ({
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
    <g clip-path="url(#clip0_28_61027)">
<path d="M11.114 14.556C11.3487 14.79 11.6666 14.9214 11.998 14.9214C12.3294 14.9214 12.6473 14.79 12.882 14.556L22.568 4.87C22.6338 4.80448 22.68 4.72195 22.7015 4.63164C22.723 4.54133 22.7189 4.44683 22.6898 4.3587C22.6606 4.27057 22.6075 4.1923 22.5363 4.13266C22.4652 4.07301 22.3789 4.03435 22.287 4.021C22.192 4.007 22.0961 3.99998 22 4H2C1.90328 3.99988 1.80669 4.0069 1.711 4.021C1.61913 4.03435 1.5328 4.07301 1.46166 4.13266C1.39053 4.1923 1.3374 4.27057 1.30823 4.3587C1.27906 4.44683 1.275 4.54133 1.29651 4.63164C1.31802 4.72195 1.36424 4.80448 1.43 4.87L11.114 14.556Z" fill={color}/>
<path d="M23.888 5.832C23.8546 5.81781 23.8177 5.81394 23.782 5.82089C23.7464 5.82784 23.7136 5.84529 23.688 5.871L17.488 12.071C17.4412 12.118 17.415 12.1817 17.415 12.248C17.415 12.3143 17.4412 12.378 17.488 12.425L22.531 17.468C22.6027 17.5372 22.6598 17.6199 22.6992 17.7114C22.7385 17.8029 22.7593 17.9013 22.7602 18.0008C22.7611 18.1004 22.7422 18.1992 22.7045 18.2914C22.6668 18.3836 22.6112 18.4673 22.5408 18.5378C22.4704 18.6082 22.3867 18.664 22.2945 18.7017C22.2024 18.7395 22.1036 18.7585 22.0041 18.7577C21.9045 18.7569 21.806 18.7362 21.7145 18.697C21.623 18.6577 21.5402 18.6006 21.471 18.529L16.428 13.486C16.4048 13.4627 16.3772 13.4442 16.3468 13.4316C16.3164 13.419 16.2839 13.4126 16.251 13.4126C16.2181 13.4126 16.1856 13.419 16.1552 13.4316C16.1248 13.4442 16.0972 13.4627 16.074 13.486L13.945 15.615C13.4293 16.1304 12.7301 16.4199 12.001 16.4199C11.2719 16.4199 10.5727 16.1304 10.057 15.615L7.926 13.488C7.87897 13.4412 7.81533 13.415 7.749 13.415C7.68267 13.415 7.61903 13.4412 7.572 13.488L2.529 18.531C2.38748 18.6676 2.198 18.7431 2.00135 18.7413C1.8047 18.7395 1.61663 18.6605 1.47764 18.5214C1.33865 18.3823 1.25986 18.1941 1.25824 17.9975C1.25663 17.8008 1.33231 17.6114 1.469 17.47L6.512 12.427C6.55878 12.38 6.58503 12.3163 6.58503 12.25C6.58503 12.1837 6.55878 12.12 6.512 12.073L0.312 5.873C0.286508 5.84705 0.253752 5.82944 0.21805 5.82248C0.182347 5.81551 0.145373 5.81953 0.112 5.834C0.0791449 5.84769 0.0510241 5.87071 0.0311174 5.90021C0.0112108 5.92972 0.000392021 5.96441 0 6V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H22C22.5304 20 23.0391 19.7893 23.4142 19.4142C23.7893 19.0391 24 18.5304 24 18V6C24.0001 5.96404 23.9895 5.92885 23.9696 5.89893C23.9497 5.86901 23.9212 5.84571 23.888 5.832Z" fill={color}/>
</g>
<defs >
<clipPath id="clip0_28_61027">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>

    </svg>
  );
};