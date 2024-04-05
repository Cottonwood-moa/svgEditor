// import { useNavigate } from 'react-router-dom';
import Diagram from 'components/Diagram';
import { ReactFlowProvider } from 'reactflow';

function Test() {
  return (
    <ReactFlowProvider>
      <Diagram />
    </ReactFlowProvider>
  );
}

export default Test;
