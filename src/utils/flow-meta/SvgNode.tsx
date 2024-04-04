/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useState } from 'react';
import { NodeResizer, Handle, Position, useReactFlow } from 'reactflow';
import TestSvg1 from '../../svg/emptyAreaTest';
import TestSvg2 from '../../svg/test2';
import TestSvg3 from '../../svg/test3';
import TestSvg4 from '../../svg/test4';
import TestSvg5 from '../../svg/test5';
import TestSvg6 from '../../svg/test6';
import MachineryPart from '../../svg/parts';

/* RootObject {
  id: string;
  data: Data;
  type: string;
  xPos: number;
  yPos: number;
  selected: boolean;
  isConnectable: boolean;
  sourcePosition: string;
  targetPosition: string;
  dragging: boolean;
  zIndex: number;
}

interface Data {
  type: string;
} */
function SvgNode({
  id,
  selected,
  data,
  /*   xPos,
  yPos,
  isConnectable,
  sourcePosition,
  targetPosition,
  dragging,
  zIndex, */
}: any) {
  const reactFlow = useReactFlow();
  const [isResult, setisResult] = useState<boolean>();

  const actionContoller = (action: any) => {
    if (action?.type === 'value') {
      const node = reactFlow.getNode(id);
      node!.data.value = action.value;
    }
  };

  useEffect(() => {
    if (window.location.pathname === '/result') {
      setisResult(true);
    }
  }, []);

  useEffect(() => {
    console.log('하이킥 TestSvg1', TestSvg1);
  }, []);

  return (
    <>
      {/* {selected && <div className="absolute -translate-y-6">테스트</div>} */}
      {!isResult && (
        <NodeResizer
          color="rgb(0 151 167)"
          isVisible={selected}
          minWidth={100}
          minHeight={30}
        />
      )}
      {data?.type === 'test1' && (
        <TestSvg1 className="h-full w-full" selected={selected} />
      )}
      {data?.type === 'test2' && (
        <TestSvg2 className="h-full w-full" selected={selected} />
      )}
      {data?.type === 'test3' && (
        <TestSvg3 className="h-full w-full" selected={selected} />
      )}
      {/* 이벤트 걸려있는 노드 */}
      {data?.type === 'test4' && (
        <TestSvg4
          className="h-full w-full"
          selected={selected}
          action={actionContoller}
          value={data?.value}
        />
      )}
      {data?.type === 'test5' && (
        <TestSvg5 className="h-full w-full" selected={selected} />
      )}
      {data?.type === 'test6' && (
        <TestSvg6 className="h-full w-full" selected={selected} />
      )}

      {data?.type === 'test7' && (
        <MachineryPart className="h-full w-full" selected={selected} />
      )}

      {!isResult && (
        <>
          <Handle type="target" position={Position.Left} />
          <Handle type="source" position={Position.Right} />
        </>
      )}
    </>
  );
}

export default memo(SvgNode);
