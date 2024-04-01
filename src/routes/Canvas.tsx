/* eslint-disable @typescript-eslint/no-explicit-any */
import { Graph } from '@antv/x6';
import Diagram from 'components/diagram';
import { useEffect, useState } from 'react';

function Canvas() {
  const [diagramData, setDiagramData] = useState<Graph>(); // diagram 데이터 상태
  // Diagram 컴포넌트에 전달할 데이터를 관리하는 함수
  const handleDiagramDataChange = (newData: Graph) => {
    setDiagramData(newData);
  };

  const test = () => {
    console.log('하이킥 test', diagramData);
    diagramData?.exportSVG('test', {
      copyStyles: true,
      preserveDimensions: true,
      serializeImages: true,
    });
  };

  useEffect(() => {
    console.log('하이킥 diagramData', diagramData);
  }, [diagramData]);

  return (
    <>
      <div>
        <button type="button" onClick={test}>
          버튼
        </button>
      </div>
      <Diagram onDataChange={handleDiagramDataChange} />
    </>
  );
}

export default Canvas;
