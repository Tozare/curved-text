import React from "react";
export const LineHeightIcon = ({ fill }: { fill: string, }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_1573)">
        <path d="M8 13H16V15H6L8 13Z" fill={fill} />
        <rect x="6" y="5" width="10" height="2" fill={fill} />
        <rect x="6" y="9" width="10" height="2" fill={fill} />
        <path d="M6 1H16V3H8L6 1Z" fill={fill} />
        <path d="M3 1.5L2.5 2L3.5 2L3 1.5ZM3 1.5L3.00001 14.5M3.00001 14.5L3.50001 14H2.5L3.00001 14.5Z" stroke={fill} stroke-width="2" stroke-linecap="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1_1573">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>

  )
}