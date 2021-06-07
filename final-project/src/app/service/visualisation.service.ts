import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class VisualisationService {
  constructor() {}
  public createCircle(g, cx: number, cy: number, r: number, fill: string, stroke: string, strokeWidth: number){
    return g.append('circle')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('r', r)
      .attr('fill', fill)
      .attr('stroke', stroke)
      .attr('stroke-width', strokeWidth);
  }

  public createArc(g, cornerRadius: number, outerRadius: number, innerRadius: number, startAngle: number, endAngle: number){
    const arc = d3.arc()
      .cornerRadius(cornerRadius)
      .outerRadius(outerRadius)
      .innerRadius(innerRadius)
      .startAngle(startAngle)
      .endAngle(endAngle);
    return g.append('path')
      .attr('d', arc);
  }
  public createText(g, text: string, x: number, y: number, textAnchor: string, fontSize: number, lineHeight: string, fill: string){
    return g.append('text')
      .text(text)
      .attr('x', x)
      .attr('y', y)
      .attr('text-anchor', textAnchor)
      .style('font-size', fontSize)
      .style('line-height', lineHeight)
      .style('fill', fill);
  }
  public createLine(g, x1: number, y1: number, x2: number, y2: number, stroke: string, strokeWidth: number, strokeDasharray: string){
    return g.append('line')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .attr('stroke', stroke)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-dasharray', strokeDasharray);
  }
  public createRect(g, x: number, y: number, width: number, height: number){
    return g.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', width)
      .attr('height', height);
  }
  public checkPriority(priority: number): string{
    let color: string;
    if (priority === 0){
      color = '#0089FF';
    }
    if (priority === 1){
      color = 'white';
    }
    if (priority === 2){
      color = '#F7931E';
    }
    if (priority === 3){
      color = '#FF1D25';
    }
    return color;
  }
}
