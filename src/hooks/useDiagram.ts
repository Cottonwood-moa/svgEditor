/* eslint-disable @typescript-eslint/no-explicit-any */
import { Graph } from '@antv/x6';
import { useEffect, useState } from 'react';
import { initDiagram, initStencil } from 'utils/fabric/diagram';

const useDiagram = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
) => {
  const [graph, setGraph] = useState<Graph>();

  useEffect(() => {
    if (!containerRef) {
      return;
    }
    const currentContainerRef = containerRef.current as HTMLDivElement;
    const diagram = initDiagram(currentContainerRef);
    initStencil(diagram);
    setGraph(diagram);
  }, [containerRef]);

  /* 테스트용 데이터 */
  useEffect(() => {
    if (!graph) {
      return;
    }
    graph.centerContent();
  }, [graph]);

  return { diagram: graph };
};

export default useDiagram;
