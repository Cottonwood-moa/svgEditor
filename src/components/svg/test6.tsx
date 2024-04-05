import * as React from 'react';

const Test6 = ({ className, action, value }: any) => {
  React.useEffect(() => {
    console.log(className, action, value);
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={351.887}
      height={242.374}
      viewBox="0 0 351.887 242.374"
      filter="invert(93%) hue-rotate(180deg)"
      className={className}
    >
      <defs>
        <style>
          {
            '@font-face{font-family:"Virgil";src:url(https://unpkg.com/@excalidraw/excalidraw@undefined/dist/excalidraw-assets/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://unpkg.com/@excalidraw/excalidraw@undefined/dist/excalidraw-assets/Cascadia.woff2)}@font-face{font-family:"Assistant";src:url(https://unpkg.com/@excalidraw/excalidraw@undefined/dist/excalidraw-assets/Assistant-Regular.woff2)}'
          }
        </style>
      </defs>
      <g strokeLinecap="round">
        <path
          fill="#2f9e44"
          strokeWidth={0}
          d="m57.129 192.677.317-182.68 284.44.493-.317 182.68"
        />
        <path
          fill="none"
          stroke="#000"
          d="m57.129 192.677.317-182.68m-.317 182.68.317-182.68m0 0 284.44.493m-284.44-.493 284.44.493m0 0-.317 182.68m.316-182.68-.316 182.68m0 0-284.44-.493m284.44.493-284.44-.493"
        />
      </g>
      <g strokeLinecap="round">
        <path
          fill="#2f9e44"
          strokeWidth={0}
          d="m31.896 212.279.317-182.68 284.44.493-.317 182.68"
        />
        <path
          fill="none"
          stroke="#000"
          d="m31.896 212.279.317-182.68m-.317 182.68.317-182.68m0 0 284.44.493M32.212 29.6l284.44.493m0 0-.317 182.68m.316-182.68-.316 182.68m0 0-284.44-.493m284.44.493-284.44-.493"
        />
      </g>
      <g strokeLinecap="round">
        <path
          fill="#2f9e44"
          strokeWidth={0}
          d="m10 231.881.317-182.68 284.44.494-.317 182.68"
        />
        <path
          fill="none"
          stroke="#1e1e1e"
          d="m10 231.881.317-182.68M10 231.882l.317-182.68m0 0 284.44.494m-284.44-.493c63.81.11 127.62.22 284.44.493m0 0c-.12 68.34-.238 136.68-.317 182.68m.316-182.68-.316 182.68m0 0L10 231.88m284.44.493L10 231.881"
        />
      </g>
    </svg>
  );
};
export default Test6;
