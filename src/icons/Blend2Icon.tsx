import React, { forwardRef, type SVGProps } from "react";

const Blend2Icon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#clip0_1_425)">
        <path
          d="M14.97 8C14.97 11.87 11.84 15 7.96997 15C7.64997 15 7.33997 14.98 7.03997 14.93C3.60997 14.48 0.969971 11.55 0.969971 8C0.969971 4.13 4.09997 1 7.96997 1C11.52 1 14.45 3.64 14.9 7.07C14.95 7.37 14.97 7.68 14.97 8Z"
          stroke="var(--icon-stroke, inherit)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.97 14.0001C20.97 17.8701 17.84 21.0001 13.97 21.0001C10.42 21.0001 7.48998 18.3601 7.03998 14.9301C7.33998 14.9801 7.64998 15.0001 7.96998 15.0001C11.84 15.0001 14.97 11.8701 14.97 8.00007C14.97 7.68007 14.95 7.37007 14.9 7.07007C18.33 7.52007 20.97 10.4501 20.97 14.0001Z"
          stroke="var(--icon-stroke, inherit)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.12 13.1201L14.43 14.4101"
          stroke="var(--icon-stroke, inherit)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.97 11L14.97 10"
          stroke="var(--icon-stroke, inherit)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.97 16L9.96997 15"
          stroke="var(--icon-stroke, inherit)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_425">
          <rect width="22" height="22" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
);

Blend2Icon.displayName = "Blend2Icon";

export default Blend2Icon;
