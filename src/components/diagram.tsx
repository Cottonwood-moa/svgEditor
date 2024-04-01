/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import useDiagram from 'hooks/useDiagram';
import { Graph } from '@antv/x6';

interface DiagramProps {
  onDataChange: (newData: Graph) => void; // 부모 컴포넌트로 데이터 변경을 전달하는 콜백 함수
}

function Diagram({ onDataChange }: DiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { diagram } = useDiagram(containerRef);

  useEffect(() => {
    if (!diagram) {
      return;
    }
    onDataChange(diagram);
  }, [diagram, onDataChange]);

  return (
    <div className="flex w-full p-0">
      <div className="fixed z-10 h-96 w-64" id="stencil" />
      <div className="h-[100vh] flex-1" ref={containerRef} />
    </div>
  );
}

export default Diagram;
