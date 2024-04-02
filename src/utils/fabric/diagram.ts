/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Graph, Shape } from '@antv/x6';
import { Transform } from '@antv/x6-plugin-transform';
import { Selection } from '@antv/x6-plugin-selection';
// import { Snapline } from '@antv/x6-plugin-snapline';
import { Keyboard } from '@antv/x6-plugin-keyboard';
import { Clipboard } from '@antv/x6-plugin-clipboard';
import { History } from '@antv/x6-plugin-history';
// import { Stencil } from '@antv/x6-plugin-stencil';
import { register } from '@antv/x6-react-shape';
import { Export } from '@antv/x6-plugin-export';
import Svg from 'components/svg';
import { MiniMap } from '@antv/x6-plugin-minimap';
import Test2 from 'components/test2';
import { PortManager } from '@antv/x6/lib/model/port';
import SampleChart from 'components/sampleCharts';

const portsMeta: PortManager.Metadata = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    },
  ],
};

export const initDiagram = (ref: HTMLDivElement) => {
  const diagram = new Graph({
    container: ref,
    panning: true,
    mousewheel: true,
    connecting: {
      router: 'manhattan',
      connector: {
        name: 'rounded',
        args: {
          radius: 8,
        },
      },
      anchor: 'center',
      connectionPoint: 'anchor',
      allowBlank: false,
      snap: {
        radius: 20,
      },
      createEdge() {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2,
              targetMarker: {
                name: 'block',
                width: 12,
                height: 8,
              },
            },
          },
          zIndex: 0,
        });
      },
      validateConnection({ targetMagnet }) {
        return !!targetMagnet;
      },
    },
    background: {
      color: '#fff',
    },
    embedding: false,
    grid: {
      visible: true,
      type: 'dot',
      args: {
        color: '#a0a0a0',
        thickness: 1,
      },
    },
  });
  diagram
    .use(
      new Selection({
        enabled: true,
        multiple: true,
        rubberband: true,
        movable: true,
        showNodeSelectionBox: true,
      }),
    )
    .use(
      new Clipboard({
        enabled: true,
      }),
    )
    .use(
      new Transform({
        resizing: true,
        rotating: true,
      }),
    )
    // .use(new Snapline())
    .use(new Keyboard())
    .use(new History())
    .use(new Export());

  diagram.bindKey(['meta+c', 'ctrl+c'], () => {
    const cells = diagram.getSelectedCells();
    if (cells.length) {
      diagram.copy(cells);
    }
    return false;
  });

  diagram.bindKey(['meta+x', 'ctrl+x'], () => {
    const cells = diagram.getSelectedCells();
    if (cells.length) {
      diagram.cut(cells);
    }
    return false;
  });

  diagram.bindKey(['meta+v', 'ctrl+v'], () => {
    if (!diagram.isClipboardEmpty()) {
      const cells = diagram.paste({ offset: 32 });
      diagram.cleanSelection();
      diagram.select(cells);
    }
    return false;
  });

  diagram.bindKey(['meta+z', 'ctrl+z'], () => {
    if (diagram.canUndo()) {
      diagram.undo();
    }
    return false;
  });

  diagram.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
    if (diagram.canRedo()) {
      diagram.redo();
    }
    return false;
  });

  diagram.bindKey('delete', () => {
    const cells = diagram.getSelectedCells();
    if (cells.length) {
      diagram.removeCells(cells);
    }
  });

  register({
    shape: 'test1-node',
    effect: ['type'],
    ports: { ...portsMeta },
    component: Svg,
  });
  register({
    shape: 'test-form-node1',
    effect: ['type'],
    ports: { ...portsMeta },
    component: SampleChart,
  });
  register({
    shape: 'test-form-node2',
    effect: ['type'],
    ports: { ...portsMeta },
    component: Test2,
  });

  Graph.registerNode(
    'custom-rect',
    {
      inherit: 'rect',
      width: 66,
      height: 36,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
        },
        text: {
          fontSize: 12,
          fill: '#262626',
        },
      },
    },
    true,
  );

  return diagram;
};

export const getNodeSet1 = (diagram: Graph) => {
  const test1 = diagram
    .createNode({
      width: 100,
      height: 100,
      shape: 'test1-node',
    })
    .prop('type', 'test1');

  const r1 = diagram.createNode({
    shape: 'custom-rect',
    label: '테스트',
    attrs: {
      body: {
        rx: 20,
        ry: 26,
      },
    },
  });
  return [r1, test1];
};

export const getNodeSet2 = (diagram: Graph) => {
  const test1 = diagram.addNode({
    width: 420,
    height: 340,
    shape: 'test-form-node1',
  });
  return [test1];
};

export const portShowEvent = (diagram: Graph) => {
  const showPorts = (ports: any, show: boolean) => {
    for (let i = 0, len = ports.length; i < len; i += 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden';
    }
  };

  diagram.on('node:mouseenter', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.x6-port-body',
    ) as NodeListOf<SVGElement>;
    showPorts(ports, true);
  });

  diagram.on('node:mouseleave', () => {
    const container = document.getElementById('graph-container')!;
    const ports = container.querySelectorAll(
      '.x6-port-body',
    ) as NodeListOf<SVGElement>;
    showPorts(ports, false);
  });
};

export const initMinimap = (diagram: Graph) => {
  const minimap = document.getElementById('minimap');
  if (!minimap) return;
  diagram.use(
    new MiniMap({
      container: minimap,
      scalable: true,
    }),
  );
};

/* export const initStencil = (diagram: Graph) => {
  const stencil = new Stencil({
    title: 'List',
    target: diagram,
    stencilGraphWidth: 250,
    stencilGraphHeight: 0,
    collapsable: true,
    groups: [
      {
        title: 'group1',
        name: 'group1',
      },
    ],
    layoutOptions: {
      columns: 2,
      columnWidth: 120,
      rowHeight: 120,
    },
  });
  const nodeset1 = getNodeSet1(diagram);
  getNodeSet2(diagram);
  // const nodeset2 = getNodeSet2(diagram);
  stencil.load(nodeset1, 'group1');
  // stencil.load(nodeset2, 'group2');
  document.getElementById('stencil')!.appendChild(stencil.container);
}; */
