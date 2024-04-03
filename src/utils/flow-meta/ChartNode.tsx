/* eslint-disable @typescript-eslint/no-explicit-any */
import SampleBarChart from 'components/sampleBarChart';
import SampleChart from 'components/sampleCharts';
import { memo, useEffect, useState } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';

const ChartNode = ({ data, selected }: any) => {
  const [isResult, setisResult] = useState<boolean>();

  useEffect(() => {
    if (window.location.pathname === '/result') {
      setisResult(true);
    }
  }, []);
  return (
    <div className="cursor-default">
      {!isResult && (
        <>
          <NodeResizer
            color="rgb(0 151 167)"
            isVisible={selected}
            minWidth={100}
            minHeight={30}
          />
          <Handle type="target" position={Position.Left} />
        </>
      )}
      {data?.type === 'line' && <SampleChart />}
      {data?.type === 'bar' && <SampleBarChart />}
      {!isResult && <Handle type="source" position={Position.Right} />}
    </div>
  );
};

export default memo(ChartNode);
