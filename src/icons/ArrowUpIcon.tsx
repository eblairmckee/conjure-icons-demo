import React, { forwardRef, type SVGProps } from "react";

const ArrowUpIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
        stroke="var(--icon-stroke, inherit)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 20.4999V3.66992"
        stroke="var(--icon-stroke, inherit)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
);

ArrowUpIcon.displayName = "ArrowUpIcon";

export default ArrowUpIcon;
