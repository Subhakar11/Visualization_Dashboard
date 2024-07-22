import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Visualization = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .attr('width', 800)
      .attr('height', 600);

    // Clear previous content
    svg.selectAll('*').remove();

    // Your D3 visualization code here

  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default Visualization;
