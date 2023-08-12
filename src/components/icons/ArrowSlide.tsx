import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSlide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M.94 10.94a1.5 1.5 0 0 0 0 2.12l9.545 9.547a1.5 1.5 0 1 0 2.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 1 0-2.122-2.122L.94 10.94ZM28 10.5H2v3h26v-3Z"
    />
  </svg>
);
export default SvgArrowSlide;
