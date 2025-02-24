import React, { forwardRef, type SVGProps } from "react";

const ArrowSwapHorizontalIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>((props, ref) => (
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
      d="M20.5 14.99L15.49 20.01"
      stroke="var(--icon-stroke, inherit)"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.5 14.99H20.5"
      stroke="var(--icon-stroke, inherit)"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.5 9.00999L8.51 3.98999"
      stroke="var(--icon-stroke, inherit)"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20.5 9.01001H3.5"
      stroke="var(--icon-stroke, inherit)"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
));

ArrowSwapHorizontalIcon.displayName = "ArrowSwapHorizontalIcon";

export default ArrowSwapHorizontalIcon;
