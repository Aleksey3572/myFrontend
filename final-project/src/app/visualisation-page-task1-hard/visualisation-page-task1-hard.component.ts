import { Component, OnInit } from '@angular/core';
import {DataService, ICell} from '../service/data.service';
import {VisualisationService} from '../service/visualisation.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-visualisation-page-task1-hard',
  templateUrl: './visualisation-page-task1-hard.component.html',
  styleUrls: ['./visualisation-page-task1-hard.component.scss']
})
export class VisualisationPageTask1HardComponent implements OnInit {

  constructor(public dataService: DataService, private visualisationService: VisualisationService) {}

  ngOnInit(): void {
    const svg = d3.select('svg.wrapper__visualisationData');
    const rect1 = svg.append('g');
    const rect2 = svg.append('g');
    const circle = svg.append('g');

    this.visualisationService.createRect(rect1, 132, 68, 610, 165)
      .attr('fill', '#161922')
      .attr('stroke', '#1e212d')
      .attr('stroke-width', 2);
    this.visualisationService.createArc(rect1, 0, 111, 111, 0, Math.PI * 0.607)
      .attr('stroke', '#1e212d')
      .attr('stroke-width', 2)
      .attr('transform', 'translate(121,124) rotate(60)');
    this.visualisationService.createRect(rect1, 131, 14, 612, 55)
      .attr('fill', '#21242f');
    this.visualisationService.createText(rect1, this.dataService.fullStatistics.material, 251, 55, 'start', 30.6727, '37px', '#D7E2F2');
    this.visualisationService.createText(rect1, this.dataService.fullStatistics.quantityMaterial, 657, 53, 'start', 26.2909, '32px', '#0089FF');
    this.visualisationService.createText(rect1, 'Накопительно:', 251, 102, 'start', 21.9091, '26px', '#606580');
    this.visualisationService.createText(rect1, this.dataService.fullStatistics.quantityCumulatively, 657, 100, 'start', 26.2909, '32px', '#606580');

    for (let i = 0, x = 250; i < this.dataService.fullStatistics.table.length; i++){
      this.visualisationService.createRect(rect1, x, 117, 11, 101)
        .attr('fill', '#272A38')
        .attr('rx', 2)
        .attr('ry', 2)
        .on('mouseover', function(){d3.select(this).attr('fill', '#122f4e'); })
        .on('mouseout', function(){d3.select(this).attr('fill', '#272a38'); });
      const column: ICell[] = this.dataService.fullStatistics.table[i].column;

      for (let j = 0, y = 213; j < column.length; j++) {
        const color: string = this.visualisationService.checkPriority(column[j].priority);
        this.visualisationService.createRect(rect1, x + 2, y, 7, 3)
          .attr('fill', '#272A38')
          .attr('rx', 2)
          .attr('ry', 2)
          .attr('pointer-events', 'none')
          .transition().delay(30 * i + 400).duration(50 * j)
          .attr('fill', color);
        y = y - 4.7;
      }
      x = x + 16;
    }
    let data = [];
    data.push([250, 218 - this.dataService.fullStatistics.table[0].percentData * 101]);
    data.push([263, 218 - this.dataService.fullStatistics.table[0].percentData * 101]);
    let x = 266;
    for (let i = 1; i < this.dataService.fullStatistics.table.length - 1; i++){
      data.push([x - 2.5, 218 - this.dataService.fullStatistics.table[i].percentData * 101]);
      data.push([x + 13.5, 218 - this.dataService.fullStatistics.table[i].percentData * 101]);
      x = x + 16;
    }
    data.push([x - 2.5, 218 - this.dataService.fullStatistics.table[29].percentData * 101]);
    data.push([x + 11, 218 - this.dataService.fullStatistics.table[29].percentData * 101]);

    let path = rect1.append('path')
      .attr('d', d3.line()(data))
      .attr('stroke', '#0089FF')
      .attr('stroke-width', 2.5)
      .attr('fill', 'none')
      .attr('pointer-events', 'none');

    let lengthLine = path.node().getTotalLength();

    path
      .attr('stroke-dasharray', `${lengthLine} ${lengthLine}`)
      .attr('stroke-dashoffset', `${lengthLine}`)
      .transition().delay(1500).duration(1000)
      .attr('stroke-dashoffset', '0');

    this.visualisationService.createRect(rect2, 749, 15, 70, 218)
      .attr('fill', '#161922')
      .attr('stroke', '#1d202c')
      .attr('stroke-width', 2);
    this.visualisationService.createRect(rect2, 752, 76, 64, 154)
      .attr('fill', '#122f4e');
    this.visualisationService.createLine(rect2, 752, 107, 816, 107, 'white', 2, '2')
      .attr('stroke-dashoffset', '1');
    this.visualisationService.createRect(rect2, 752, 116, 64, 96)
      .attr('fill', '#0089ff');
    this.visualisationService.createLine(rect2, 752, 215, 816, 215, 'white', 2, '2')
      .attr('stroke-dashoffset', '1');
    this.visualisationService.createText(rect2, `${this.dataService.fullStatistics.percentBar}`, 760, 50, 'start', 26.2909, '32px', '#D7E2F2');
    this.visualisationService.createText(rect2, '%', 792, 50, 'start', 17.5273, '21px', '#606580');


    this.visualisationService.createCircle(circle, 121, 124, 110, '#1b1e27', 'none', 0);
    this.visualisationService.createCircle(circle, 121, 124, 104, '#161922', '#1e212d', 2);
    this.visualisationService.createCircle(circle, 121, 124, 92, '#161922', '#122f4e', 7);
    this.visualisationService.createArc(circle, 30, 95.6, 88.5, 0.009, 0)
      .attr('transform', 'translate(121, 124)')
      .attr('fill', '#0089ff')
      .transition().delay(400).duration(1000).attrTween('d', () => {
      return (t) => {
        const angle = d3.interpolate(0, Math.PI * 2 * this.dataService.fullStatistics.percentCircle)(t);
        return d3.arc().cornerRadius(30)({
          outerRadius: 95.6,
          innerRadius: 88.5,
          startAngle: 0,
          endAngle: angle
        });
      };
    });
    this.visualisationService.createText(circle, this.dataService.fullStatistics.str, 111, 65, 'start', 21.9091, '26px', '#606580');
    this.visualisationService.createText(circle, this.dataService.fullStatistics.quantityMaterial, 85, 125, 'start', 26.2909, '32px', '#D7E2F2');
    this.visualisationService.createLine(circle, 70, 135, 168, 135, '#282c39', 2, '2');
    this.visualisationService.createText(circle, this.dataService.fullStatistics.usedMaterial, 110, 165, 'start', 26.2909, '32px', '#606580');
  }

}
