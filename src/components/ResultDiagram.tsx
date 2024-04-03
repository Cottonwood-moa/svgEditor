/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Textarea,
} from '@material-tailwind/react';
import { useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from 'reactflow';
import ChartNode from 'utils/flow-meta/ChartNode';
import ResizeNode from 'utils/flow-meta/ResizeNode';
import SvgNode from 'utils/flow-meta/SvgNode';
import Test4 from 'svg/test4';

const ResultDiagram = () => {
  const [initData, setInitData] = useState<any>();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [_reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const reactFlow = useReactFlow();
  const [text, setText] = useState('');
  const insertJson = (data: any) => {
    if (initData) {
      return;
    }
    setInitData(data);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleConfirm = () => {
    handleOpen();
    insertJson(text);
  };

  const nodeRegistration = useMemo<any>(
    () => ({
      svg: SvgNode,
      resizeNode: ResizeNode,
      chartNode: ChartNode,
    }),
    [],
  );

  useEffect(() => {
    if (!initData) {
      return;
    }
    const insertedJson = JSON.parse(initData);
    console.log('하이킥 initData', insertedJson);
    setNodes(insertedJson.nodes);
    setEdges(insertedJson.edges);
    setTimeout(reactFlow.fitView);
  }, [initData]);

  return (
    <>
      <div className="result-diagram h-[100vh] w-[100vw]">
        <header className="body-font fixed left-0 right-0 top-4 z-10 m-[auto] w-[500px] min-w-[300px] rounded-full border-2 border-[#232329] bg-[#232329] text-gray-600">
          <div className="container mx-auto flex flex-col flex-wrap items-center p-2 px-4 md:flex-row">
            <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-8 w-8 rounded-full bg-cyan-700 p-2 text-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-lg font-bold text-white">
                결과 확인 페이지
              </span>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <div className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900">
                <Button
                  className="rounded-full border-cyan-700 bg-cyan-900 text-white"
                  size="sm"
                  variant="outlined"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onClick={() => setOpen(true)}
                >
                  Data 주입
                </Button>
              </div>
            </nav>
          </div>
        </header>
        <ReactFlow
          nodeTypes={nodeRegistration}
          nodes={nodes}
          edges={edges}
          onInit={setReactFlowInstance}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          edgesUpdatable={false}
          edgesFocusable={false}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
        >
          <Controls />
          <Background
            variant={BackgroundVariant.Dots}
            gap={12}
            size={1}
            color="#3C3C3C"
            style={{ background: '#121212' }}
          />
        </ReactFlow>
      </div>

      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <DialogHeader
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Data 주입
        </DialogHeader>
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Textarea
            color="cyan"
            label="JSON 데이터를 입력하세요"
            onChange={(event) => setText(event.target.value)}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        </DialogBody>
        <DialogFooter
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Test4 />
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
            placeholder={undefined}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="cyan"
            onClick={handleConfirm}
            placeholder={undefined}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ResultDiagram;
