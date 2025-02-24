import React, { forwardRef, type SVGProps } from "react";

const ArrowDown1Icon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        d="M18.0699 14.4299L11.9999 20.4999L5.92993 14.4299"
        stroke="var(--icon-stroke, inherit)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 3.5V20.33"
        stroke="var(--icon-stroke, inherit)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
);

ArrowDown1Icon.displayName = "ArrowDown1Icon";

export default ArrowDown1Icon;
