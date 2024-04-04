/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  BackgroundVariant,
  Node,
  useReactFlow,
  SelectionMode,
} from 'reactflow';
import ResizeNode from 'utils/flow-meta/ResizeNode';
import SvgNode from 'utils/flow-meta/SvgNode';
import 'reactflow/dist/style.css';
import ChartNode from 'utils/flow-meta/ChartNode';
import { cloneDeep } from 'lodash';
import NodeDragList from './NodeDragList';

const initialNodes: Node[] = [
  /* { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '2-1', type: 'svg', position: { x: 0, y: 0 }, data: { type: 'test1' } },
  { id: '2-2', type: 'svg', position: { x: 0, y: 0 }, data: { type: 'test2' } },
  {
    id: '4',
    type: 'resizeNode',
    position: { x: 0, y: 0 },
    data: { label: '' },
    style: {
      width: '100px',
      height: '100px',
      background: 'white',
      border: '1px solid gray',
    },
  },
  {
    id: '5',
    type: 'chartNode',
    position: { x: 0, y: 0 },
    data: { label: '' },
    style: {
      width: '550px',
      height: '280px',
      background: 'white',
      border: '1px solid gray',
    },
  }, */
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

let id = 0;
const getId = () => `dndnode_${id++}`;
const panOnDrag = [1, 2];

export default function DiagramTest() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const reactFlow = useReactFlow();

  const getObjectForExport = () => {
    const resEdges = cloneDeep(reactFlow.getEdges());
    const resNodes = cloneDeep(reactFlow.getNodes()).map((node) => ({
      ...node,
      selectable: true,
      deletable: false,
      dragHandle: false,
      draggable: false,
    }));
    return {
      nodes: resNodes,
      edges: resEdges,
    };
  };

  const copyClipBoard = () => {
    navigator.clipboard.writeText(JSON.stringify(getObjectForExport()));
    alert('Copied');
    console.log('하이킥 reactFlow', reactFlow);
  };

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const nodeRegistration = useMemo<any>(
    () => ({
      svg: SvgNode,
      resizeNode: ResizeNode,
      chartNode: ChartNode,
    }),
    [],
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      const dropNodeInfo = JSON.parse(
        event.dataTransfer.getData('application/reactflow'),
      );
      if (typeof dropNodeInfo.type === 'undefined' || !dropNodeInfo?.type) {
        return;
      }
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type: dropNodeInfo.type,
        position,
        data: dropNodeInfo?.data
          ? dropNodeInfo.data
          : { label: `${dropNodeInfo.type} node` },
        zIndex: dropNodeInfo?.zIndex ?? 0,
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );
  useEffect(() => {
    // reactFlow.onSele;
  }, []);

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
        <header className="body-font fixed left-0 right-0 top-4 z-10 m-[auto] w-fit min-w-[300px] rounded-full border-2 bg-white text-gray-600">
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
              <span className="ml-3 text-lg font-bold">React Flow</span>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <div
                className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
                onClick={copyClipBoard}
              >
                Copy
              </div>

              {/*
              <div
                className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
                // onClick={appendSvgNode}
              >
                + SVG
              </div>
              <div
                className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
                // onClick={appendCustomNode}
              >
                + Chart
              </div>
              <div
                className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
                // onClick={appendCustomNode2}
              >
                + Custom
              </div>
              <div
                className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
                // onClick={exportSvg}
              >
                SVG 추출
              </div>
              <div
                className="mr-5 cursor-pointer text-sm font-bold hover:text-gray-900"
                // onClick={exportImg}
              >
                Img 추출
              </div> */}
            </nav>
          </div>
        </header>
        <ReactFlow
          deleteKeyCode={['Delete', 'Ctrl + x']}
          multiSelectionKeyCode={['Shift']}
          nodeTypes={nodeRegistration}
          nodes={nodes}
          edges={edges}
          onInit={setReactFlowInstance}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          panOnScroll
          selectionOnDrag
          panOnDrag={panOnDrag}
          selectionMode={SelectionMode.Partial}
          fitView
        >
          <Controls />
          <MiniMap
            nodeColor="rgb(0 151 167)"
            maskStrokeColor="rgb(0 151 167)"
          />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
      <NodeDragList />
    </>
  );
}
