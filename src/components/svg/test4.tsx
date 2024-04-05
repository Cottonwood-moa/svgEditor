import {
  Dialog,
  DialogHeader,
  DialogBody,
  Switch,
} from '@material-tailwind/react';
import * as React from 'react';
import { useEffect, useState } from 'react';

const Test4 = ({ className, action, value }: any) => {
  const [state, setState] = React.useState(false);
  const [isResult, setisResult] = useState<boolean>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const onDoubleClick = () => {
    setOpen(true);
  };
  const click = () => {
    setState((previousState) => !previousState);
  };
  const onChangeValue = (isChecked: boolean) => {
    setState(isChecked);
    action({ type: 'value', value: isChecked });
  };

  useEffect(() => {
    if (window.location.pathname === '/result') {
      setisResult(true);
    }
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setState(value);
    }
  }, [value]);

  return (
    <>
      {/* {props?.selected && (
        <div className="absolute -translate-y-6">
          <button>테스트</button>
        </div>
      )} */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={69.375}
        height={68.75}
        viewBox="9.5 9.5 50.38 49.75"
        onDoubleClick={!isResult ? onDoubleClick : () => {}}
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
          <path fill="#ced4da" strokeWidth={0} d="M10 58.75V10h49.38v48.75" />
          <path
            fill="none"
            stroke="#000"
            d="M10 58.75V10m0 48.75V10m0 0h49.38M10 10h49.38m0 0v48.75m0-48.75v48.75m0 0H10m49.38 0H10"
          />
        </g>
        <g
          strokeLinecap="round"
          transform="rotate(-90 34.025 12.1)"
          onClick={isResult ? click : () => {}}
        >
          <path
            className="pointer"
            id="EventElement"
            fill={!state ? '#c70202' : '#02c729'}
            stroke="none"
            strokeWidth={0}
            d="M23.75 12.19a12.437 12.437 0 0 1-1.59 6.09 12.158 12.158 0 0 1-2.65 3.24c-.53.46-1.1.87-1.7 1.22-.59.35-1.23.66-1.87.9-.65.24-1.33.43-2 .55-.68.12-1.38.19-2.06.19-.69 0-1.39-.07-2.07-.19-.67-.12-1.35-.31-2-.55-.64-.24-1.28-.55-1.87-.9-.6-.35-1.17-.76-1.7-1.22a12.183 12.183 0 0 1-3.52-5.16 12.437 12.437 0 0 1-.54-6.29c.12-.69.3-1.39.54-2.05.23-.66.53-1.32.87-1.93a12.158 12.158 0 0 1 2.65-3.24c.53-.45 1.1-.86 1.7-1.22.59-.35 1.23-.65 1.87-.9.65-.24 1.33-.42 2-.54.68-.13 1.38-.19 2.06-.19.69 0 1.39.06 2.07.19.67.12 1.35.3 2 .54.64.25 1.28.55 1.87.9.6.36 1.17.77 1.7 1.22a12.183 12.183 0 0 1 2.65 3.24c.34.61.64 1.27.87 1.93.24.66.42 1.36.54 2.05.12.7.15 1.76.18 2.12.03.35.03-.36 0 0"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeWidth={2}
            d="M23.75 12.19a12.437 12.437 0 0 1-1.59 6.09 12.158 12.158 0 0 1-2.65 3.24c-.53.46-1.1.87-1.7 1.22-.59.35-1.23.66-1.87.9-.65.24-1.33.43-2 .55-.68.12-1.38.19-2.06.19-.69 0-1.39-.07-2.07-.19-.67-.12-1.35-.31-2-.55-.64-.24-1.28-.55-1.87-.9-.6-.35-1.17-.76-1.7-1.22a12.183 12.183 0 0 1-3.52-5.16 12.437 12.437 0 0 1-.54-6.29c.12-.69.3-1.39.54-2.05.23-.66.53-1.32.87-1.93a12.158 12.158 0 0 1 2.65-3.24c.53-.45 1.1-.86 1.7-1.22.59-.35 1.23-.65 1.87-.9.65-.24 1.33-.42 2-.54.68-.13 1.38-.19 2.06-.19.69 0 1.39.06 2.07.19.67.12 1.35.3 2 .54.64.25 1.28.55 1.87.9.6.36 1.17.77 1.7 1.22a12.183 12.183 0 0 1 2.65 3.24c.34.61.64 1.27.87 1.93.24.66.42 1.36.54 2.05.12.7.15 1.76.18 2.12.03.35.03-.36 0 0"
          />
        </g>
      </svg>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <DialogHeader
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Property 설정
        </DialogHeader>
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div>Default</div>
          <Switch
            color="teal"
            defaultChecked={state}
            ripple
            onChange={(event) => onChangeValue(event.target.checked)} // Switch의 값이 변경될 때 handleChange 함수 호출
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
        </DialogBody>
      </Dialog>
    </>
  );
};
export default Test4;
