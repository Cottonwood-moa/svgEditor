/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef } from 'react';
import SvgCanvas from '@svgedit/svgcanvas';
import updateCanvas from 'utils/editor/updateCanvas';
import config from '../utils/editor/config';

function Canvas() {
  const svgcanvasRef = useRef<any>();
  useLayoutEffect(() => {
    const editorDom = svgcanvasRef.current;
    const canvas = new SvgCanvas(editorDom, config);
    updateCanvas(canvas, svgcanvasRef.current, config, true);
  }, []);
  return (
    <div
      ref={svgcanvasRef}
      className="svgcanvas"
      style={{ position: 'relative' }}
    />
  );
}

export default Canvas;
