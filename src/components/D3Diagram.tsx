/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

function D3Diagram() {
  const ref = useRef<any>();
  const [svg, setSvg] = useState<any>();
  useEffect(() => {
    if (svg) {
      return;
    }
    const svgElement = d3.select(ref.current);
    svgElement.attr('viewBox', [0, 0, 500, 800]);
    svgElement
      .append('defs')
      .append('style')
      .text(`circle.highlighted { stroke: orangered; fill: orangered; }`);

    // x and y are scales that project the data space to the ‘unzoomed’ pixel referential
    const x = d3.scaleLinear([0, 1], [0, 100]);
    const y = d3.scaleLinear([0, 1], [0, 100]);
    const random = d3.randomNormal(0, 1);
    const data = Array.from({ length: 800 }, () => [random(), random()]);
    d3.Delaunay.from(
      data,
      (d) => x(d[0]),
      (d) => y(d[1]),
    );
    const g = svgElement.append('g');
    const points = g
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', (d) => x(d[0]))
      .attr('cy', (d) => y(d[1]));

    let transform: any;

    const zoom = d3.zoom().on('zoom', (e) => {
      g.attr('transform', (transform = e.transform));
      g.style('stroke-width', 3 / Math.sqrt(transform.k));
      points.attr('r', 3 / Math.sqrt(transform.k));
    });

    svgElement.call(zoom).call(zoom.transform, d3.zoomIdentity).node();
    setSvg(svgElement);
  }, []);

  useLayoutEffect(() => {
    if (!svg) {
      return;
    }

    async function fetchSVG() {
      d3.xml(
        'https://simple.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg',
      ).then((xml) => {
        const svgNode = xml.getElementsByTagName('svg')[0];
        const toAdd = svgNode.childNodes;
        for (let i = 0; i < svgNode.childElementCount; i++) {
          svg.node().appendChild(toAdd[i]);
        }
      });
    }

    fetchSVG();
  }, [svg]);

  return <svg ref={ref} />;
}

export default D3Diagram;
