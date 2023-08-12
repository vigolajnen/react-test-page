import * as React from "react";
import type { SVGProps } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.725 21.533c-5.396 0-9.77-4.374-9.77-9.77 0-5.398 4.374-9.772 9.77-9.772 5.397 0 9.772 4.374 9.772 9.771 0 5.397-4.375 9.771-9.772 9.771Zm-3.039-8.628.013-.007.85 2.805c.11.304.26.358.443.333.184-.024.28-.123.4-.238l1.161-1.122 2.492 1.845c.455.25.783.12.896-.422l1.62-7.644c.178-.71-.135-.996-.687-.77l-9.51 3.675c-.649.26-.645.623-.117.784l2.44.762Z"
    />
  </svg>
);
export default SvgTelegram;
