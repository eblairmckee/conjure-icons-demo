import React, { forwardRef, type SVGProps } from "react";

const ArchiveSlashIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        d="M22 2L2 22"
        stroke="var(--icon-stroke, inherit)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M20.68 8.70996V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
        stroke="var(--icon-stroke, inherit)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.31995 19.95V5.86C3.31995 3.74 5.04995 2 7.17995 2H16.8299C18.0399 2 19.1199 2.56 19.8299 3.44"
        stroke="var(--icon-stroke, inherit)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
);

ArchiveSlashIcon.displayName = "ArchiveSlashIcon";

export default ArchiveSlashIcon;
