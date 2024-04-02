/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Graph } from '@antv/x6';
import Diagram from 'components/diagram';
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';

function AntvX6() {
  const [diagramData, setDiagramData] = useState<Graph>(); // diagram 데이터 상태
  // Diagram 컴포넌트에 전달할 데이터를 관리하는 함수
  const handleDiagramDataChange = (newData: Graph) => {
    setDiagramData(newData);
  };

  const exportSvg = () => {
    console.log('하이킥 test', diagramData);
    diagramData?.exportSVG('test', {
      copyStyles: true,
      preserveDimensions: true,
      serializeImages: true,
    });
  };

  const exportImg = () => {
    diagramData?.exportPNG('test', {
      copyStyles: true,
      preserveDimensions: true,
      serializeImages: true,
    });
  };

  const appendSvgNode = () => {
    diagramData
      ?.addNode({
        width: 650,
        height: 500,
        shape: 'test1-node',
      })
      .prop('type', 'test1');
  };

  const appendCustomNode = () => {
    diagramData?.addNode({
      width: 600,
      height: 260,
      shape: 'test-form-node1',
    });
  };

  const appendCustomNode2 = () => {
    diagramData?.addNode({
      width: 650,
      height: 550,
      shape: 'test-form-node2',
    });
  };

  useEffect(() => {
    console.log('하이킥 diagramData', diagramData);
  }, [diagramData]);

  return (
    <>
      <header className="body-font fixed left-0 right-0 top-4 z-10 m-[auto] w-[800px] rounded-full border-2 bg-white text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-2 px-4 md:flex-row">
          <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-8 w-8 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-lg font-bold">Antv x6</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <div
              className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
              onClick={appendSvgNode}
            >
              + SVG
            </div>
            <div
              className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
              onClick={appendCustomNode}
            >
              + Chart
            </div>
            <div
              className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
              onClick={appendCustomNode2}
            >
              + Custom
            </div>
            <div
              className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
              onClick={exportSvg}
            >
              SVG 추출
            </div>
            <div
              className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
              onClick={exportImg}
            >
              Img 추출
            </div>
          </nav>
        </div>
      </header>
      <Diagram onDataChange={handleDiagramDataChange} />
    </>
  );
}

export default AntvX6;
