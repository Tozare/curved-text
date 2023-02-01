import React from "react";
export const TextIcon = ({ fill }: { fill: string, }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4H4V14H6V4H10V3V2H0V4Z" fill={fill} />
      <path d="M11 9H8V7H16V9H13V14.0379L11 14V9Z" fill={fill} />
    </svg>
  )
}