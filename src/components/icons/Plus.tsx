import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path fill="#6DDCFF" d="M11 0h3v25h-3z" />
    <path fill="#6DDCFF" d="M25 11v3H0v-3z" />
  </svg>
);
export default SvgPlus;
