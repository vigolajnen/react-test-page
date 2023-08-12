import * as React from "react";
import type { SVGProps } from "react";
const SvgFail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 64"
    {...props}
  >
    <path
      fill="#A71C1C"
      d="M3 32C3 15.431 16.431 2 33 2c16.569 0 30 13.431 30 30 0 2.565-.322 5.054-.927 7.43-.316 1.238-1.733 1.766-2.84 1.128-.822-.475-1.197-1.455-.972-2.378.483-1.98.739-4.05.739-6.18C59 17.64 47.36 6 33 6S7 17.64 7 32s11.64 26 26 26c8.81 0 16.596-4.381 21.298-11.084.63-.897 1.837-1.22 2.786-.671.965.557 1.295 1.799.664 2.717C52.341 56.836 43.274 62 33 62 16.431 62 3 48.569 3 32Z"
    />
    <path
      stroke="#A71C1C"
      strokeLinecap="round"
      strokeWidth={4}
      d="m19 19 26.345 26.345M19 45.345 45.345 19"
    />
  </svg>
);
export default SvgFail;
