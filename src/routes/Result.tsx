import ResultDiagram from 'components/ResultDiagram';
import { ReactFlowProvider } from 'reactflow';

function Result() {
  return (
    <ReactFlowProvider>
      <ResultDiagram />
    </ReactFlowProvider>
  );
}

export default Result;
