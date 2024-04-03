// import { useNavigate } from 'react-router-dom';
import DiagramTest from 'components/svgCanvas';
import { ReactFlowProvider } from 'reactflow';

function Test() {
  return (
    <ReactFlowProvider>
      <DiagramTest />
    </ReactFlowProvider>
  );
}

export default Test;
