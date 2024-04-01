/* eslint-disable @typescript-eslint/no-unused-vars */
import { Graph } from '@antv/x6';
import { Transform } from '@antv/x6-plugin-transform';
import { Selection } from '@antv/x6-plugin-selection';
// import { Snapline } from '@antv/x6-plugin-snapline';
import { Keyboard } from '@antv/x6-plugin-keyboard';
import { Clipboard } from '@antv/x6-plugin-clipboard';
import { History } from '@antv/x6-plugin-history';
import { Stencil } from '@antv/x6-plugin-stencil';
import { register } from '@antv/x6-react-shape';
import { Export } from '@antv/x6-plugin-export';
import Svg from 'components/svg';

export const initDiagram = (ref: HTMLDivElement) => {
  const diagram = new Graph({
    container: ref,
    panning: true,
    mousewheel: true,
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
        showNodeSelectionBox: true,
        strict: true,
        movable: true,
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
    component: Svg,
  });
  register({
    shape: 'test2-node',
    effect: ['type'],
    component: Svg,
  });
  register({
    shape: 'test3-node',
    effect: ['type'],
    component: Svg,
  });
  register({
    shape: 'test4-node',
    effect: ['type'],
    component: Svg,
  });
  register({
    shape: 'test5-node',
    effect: ['type'],
    component: Svg,
  });
  register({
    shape: 'test6-node',
    effect: ['type'],
    component: Svg,
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

  const test2 = diagram
    .createNode({
      width: 100,
      height: 60,
      shape: 'test2-node',
    })
    .prop('type', 'test2');
  const test3 = diagram
    .createNode({
      width: 100,
      height: 60,
      shape: 'test3-node',
    })
    .prop('type', 'test3');
  const test4 = diagram
    .createNode({
      width: 100,
      height: 60,
      shape: 'test4-node',
    })
    .prop('type', 'test4');
  const test5 = diagram
    .createNode({
      width: 100,
      height: 60,
      shape: 'test5-node',
    })
    .prop('type', 'test5');
  const test6 = diagram
    .createNode({
      width: 100,
      height: 60,
      shape: 'test6-node',
    })
    .prop('type', 'test6');

  const r1 = diagram.createNode({
    shape: 'custom-rect',
    label: '开始',
    attrs: {
      body: {
        rx: 20,
        ry: 26,
      },
    },
  });
  return [r1, test1, test2, test3, test4, test5, test6];
};

export const getNodeSet2 = (diagram: Graph) => {
  const aws = diagram.createNode({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    markup: [
      {
        tagName: 'path',
        selector: 'eye1',
        groupSelector: 'eye',
        attrs: {
          d: 'M24.82,48.678c5.422,0,9.832-6.644,9.832-14.811c0-8.165-4.41-14.809-9.832-14.809s-9.833,6.644-9.833,14.809C14.987,42.034,19.399,48.678,24.82,48.678z',
        },
      },
      {
        tagName: 'path',
        selector: 'eye2',
        groupSelector: 'eye',
        attrs: {
          d: 'M71.606,48.678c5.422,0,9.833-6.644,9.833-14.811c0-8.165-4.411-14.809-9.833-14.809c-5.421,0-9.831,6.644-9.831,14.809C61.775,42.034,66.186,48.678,71.606,48.678z',
        },
      },
      {
        tagName: 'path',
        selector: 'lip',
        attrs: {
          d: 'M95.855,55.806c-0.6-0.605-1.516-0.77-2.285-0.4C81.232,61.29,65.125,64.53,48.214,64.53c-16.907,0-33.015-3.24-45.354-9.123c-0.77-0.367-1.688-0.205-2.284,0.4c-0.599,0.606-0.747,1.526-0.369,2.29c5.606,11.351,25.349,19.277,48.008,19.277c22.668,0,42.412-7.929,48.012-19.279C96.603,57.332,96.453,56.411,95.855,55.806z',
        },
      },
    ],
    attrs: {
      lip: {
        fill: '#E0A31A',
      },
      eye: {
        fill: '#730000',
      },
    },
  });
  const aws2 = diagram.createNode({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    markup: [
      {
        tagName: 'path',
        selector: 'eye1',
        groupSelector: 'eye',
        attrs: {
          d: 'M24.82,48.678c5.422,0,9.832-6.644,9.832-14.811c0-8.165-4.41-14.809-9.832-14.809s-9.833,6.644-9.833,14.809C14.987,42.034,19.399,48.678,24.82,48.678z',
        },
      },
      {
        tagName: 'path',
        selector: 'eye2',
        groupSelector: 'eye',
        attrs: {
          d: 'M71.606,48.678c5.422,0,9.833-6.644,9.833-14.811c0-8.165-4.411-14.809-9.833-14.809c-5.421,0-9.831,6.644-9.831,14.809C61.775,42.034,66.186,48.678,71.606,48.678z',
        },
      },
      {
        tagName: 'path',
        selector: 'lip',
        attrs: {
          d: 'M95.855,55.806c-0.6-0.605-1.516-0.77-2.285-0.4C81.232,61.29,65.125,64.53,48.214,64.53c-16.907,0-33.015-3.24-45.354-9.123c-0.77-0.367-1.688-0.205-2.284,0.4c-0.599,0.606-0.747,1.526-0.369,2.29c5.606,11.351,25.349,19.277,48.008,19.277c22.668,0,42.412-7.929,48.012-19.279C96.603,57.332,96.453,56.411,95.855,55.806z',
        },
      },
    ],
    attrs: {
      lip: {
        fill: '#E0A31A',
      },
      eye: {
        fill: '#730000',
      },
    },
  });
  const aws3 = diagram.createNode({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    markup: [
      {
        tagName: 'path',
        selector: 'eye1',
        groupSelector: 'eye',
        attrs: {
          d: 'M24.82,48.678c5.422,0,9.832-6.644,9.832-14.811c0-8.165-4.41-14.809-9.832-14.809s-9.833,6.644-9.833,14.809C14.987,42.034,19.399,48.678,24.82,48.678z',
        },
      },
      {
        tagName: 'path',
        selector: 'eye2',
        groupSelector: 'eye',
        attrs: {
          d: 'M71.606,48.678c5.422,0,9.833-6.644,9.833-14.811c0-8.165-4.411-14.809-9.833-14.809c-5.421,0-9.831,6.644-9.831,14.809C61.775,42.034,66.186,48.678,71.606,48.678z',
        },
      },
      {
        tagName: 'path',
        selector: 'lip',
        attrs: {
          d: 'M95.855,55.806c-0.6-0.605-1.516-0.77-2.285-0.4C81.232,61.29,65.125,64.53,48.214,64.53c-16.907,0-33.015-3.24-45.354-9.123c-0.77-0.367-1.688-0.205-2.284,0.4c-0.599,0.606-0.747,1.526-0.369,2.29c5.606,11.351,25.349,19.277,48.008,19.277c22.668,0,42.412-7.929,48.012-19.279C96.603,57.332,96.453,56.411,95.855,55.806z',
        },
      },
    ],
    attrs: {
      lip: {
        fill: '#E0A31A',
      },
      eye: {
        fill: '#730000',
      },
    },
  });
  return [aws, aws2, aws3];
};

export const initStencil = (diagram: Graph) => {
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
      {
        title: 'group2',
        name: 'group2',
      },
    ],
    layoutOptions: {
      columns: 2,
      columnWidth: 120,
      rowHeight: 120,
    },
  });
  const nodeset1 = getNodeSet1(diagram);
  const nodeset2 = getNodeSet2(diagram);
  // const nodeset2 = getNodeSet2(diagram);
  stencil.load(nodeset1, 'group1');
  stencil.load(nodeset2, 'group2');
  // stencil.load(nodeset2, 'group2');
  document.getElementById('stencil')!.appendChild(stencil.container);
};
