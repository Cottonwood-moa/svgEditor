import React from 'react';
import { Tooltip } from '@material-tailwind/react';
import MachineryPart from './svg/parts';
import LineChart from './svg/lineChart';
import BarChart from './svg/barChart';
import Test1 from './svg/test1';
import Test2 from './svg/test2';
import Test3 from './svg/test3';
import Test4 from './svg/test4';
import Test5 from './svg/test5';
import Test6 from './svg/test6';

export default function NodeDragList() {
  const onDragStart = (event: any, data: any) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="bg-red fixed left-0 top-0 justify-center p-6 ">
      <h1 className="mb-4 font-bold text-cyan-900">Drop List</h1>
      <Tooltip content="라인 차트" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, {
              type: 'chartNode',
              data: { type: 'line' },
              zIndex: 10,
            })
          }
          draggable
        >
          <LineChart className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="바 차트" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, {
              type: 'chartNode',
              data: { type: 'bar' },
              zIndex: 10,
            })
          }
          draggable
        >
          <BarChart className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="부품 1-1" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, {
              type: 'svg',
              data: { type: 'test1' },
              zIndex: 10,
            })
          }
          draggable
        >
          <Test1 className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="부품 1-3" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, {
              type: 'svg',
              data: { type: 'test3' },
              zIndex: 10,
            })
          }
          draggable
        >
          <Test3 className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="부품 1-4" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, {
              type: 'svg',
              data: { type: 'test4', value: false },
              zIndex: 10,
            })
          }
          draggable
        >
          <Test4 className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="부품 1-5" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, { type: 'svg', data: { type: 'test5' } })
          }
          draggable
        >
          <Test5 className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="부품 1-6" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, { type: 'svg', data: { type: 'test6' } })
          }
          draggable
        >
          <Test6 className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="부품 1-7" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, { type: 'svg', data: { type: 'test7' } })
          }
          draggable
        >
          <MachineryPart className="h-8 w-8" />
        </div>
      </Tooltip>
      <Tooltip content="테스트용" placement="right">
        <div
          className="dndnode pointer m-auto mb-2 flex h-fit w-fit items-center justify-center rounded-full bg-cyan-700 bg-opacity-20 p-3"
          onDragStart={(event) =>
            onDragStart(event, { type: 'svg', data: { type: 'test2' } })
          }
          draggable
        >
          <Test2 className="h-8 w-8" />
        </div>
      </Tooltip>
    </aside>
  );
}
