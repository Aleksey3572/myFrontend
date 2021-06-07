import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {VisualisationService} from '../service/visualisation.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-visualisation-page-task1-medium',
  templateUrl: './visualisation-page-task1-medium.component.html',
  styleUrls: ['./visualisation-page-task1-medium.component.scss']
})
export class VisualisationPageTask1MediumComponent implements OnInit {

  constructor(public dataService: DataService, private visualisationService: VisualisationService) {}

  ngOnInit(): void {
    const svg = d3.select('svg.wrapper__visualisationData');

    this.visualisationService.createCircle(svg, 170, 170, 168, '#161922', 'rgb(39, 42, 56)', 3);
    this.visualisationService.createArc(svg, 0, 167.5, 159, -Math.PI * 0.33, Math.PI * 0.33)
      .attr('transform', 'translate(170,170)')
      .attr('fill', '#1e212d');
    this.visualisationService.createArc(svg, 0, 167.5, 160, -Math.PI * 0.18, Math.PI * 0.18)
      .attr('transform', 'translate(170,178)')
      .attr('fill', '#1e212d');
    this.visualisationService.createArc(svg, 0, 167.5, 159, -Math.PI * 0.33, Math.PI * 0.33)
      .attr('transform', 'translate(170,170) rotate(180)')
      .attr('fill', '#1e212d');
    this.visualisationService.createArc(svg, 0, 167.5, 160, -Math.PI * 0.18, Math.PI * 0.18)
      .attr('transform', 'translate(170,161.5) rotate(180)')
      .attr('fill', '#1e212d');
    this.visualisationService.createArc(svg, 0, 148, 115, -Math.PI * 0.68, Math.PI * 0.68)
      .attr('transform', 'translate(170,175)')
      .attr('fill', '#1c1f2b');
    this.visualisationService.createArc(svg, 0, 148, 115, -Math.PI * 0.68, -Math.PI * 0.673)
      .attr('transform', 'translate(170,175)')
      .attr('fill', '#303549');
    this.visualisationService.createArc(svg, 0, 148, 115, Math.PI * 0.673, Math.PI * 0.68)
      .attr('transform', 'translate(170,175)')
      .attr('fill', '#303549');
    this.visualisationService.createArc(svg, 0, 131.5, 131.5, 0, -Math.PI * (1 - this.dataService.statistics[1].percent) * 1.345)//endAngle: 0 если брать другую анимацию
      .attr('transform', 'translate(170,175) rotate(121)')
      .attr('fill', 'none')
      .attr('stroke', 'none')
      .attr('stroke-dasharray', '1 2')
      /*.transition().delay(1000).duration(2000).attrTween('d', () => {
      return (t) => {
        const angle = d3.interpolate(0, -Math.PI * (1 - this.dataService.statistics[1].percent) * 1.345)(t);
        return d3.arc()({
          outerRadius: 131.5,
          innerRadius: 131.5,
          startAngle: 0,
          endAngle: angle
        });
      }
    })*/
      .transition().delay(2000).duration(1000)
      .attr('stroke', '#f7931e')
      .attr('stroke-width', 20);
      //.attr('stroke-width', 20)
      //.attr('stroke-dasharray', '1 2');
    this.visualisationService.createArc(svg, 0, 131.5, 131.5, 0, Math.PI * this.dataService.statistics[1].percent * 1.345)//endAngle: 0 если брать другую анимацию
      .attr('transform', 'translate(170,175) rotate(-121)')
      .attr('fill', 'none')
      .attr('stroke', 'none')
      .attr('stroke-dasharray', '1 2')
      /*.transition().delay(1000).duration(2000).attrTween('d', () => {
      return (t) => {
        const angle = d3.interpolate(0, Math.PI * this.dataService.statistics[1].percent * 1.345)(t);
        return d3.arc()({
          outerRadius: 131.5,
          innerRadius: 131.5,
          startAngle: 0,
          endAngle: angle
        });
      }
    })*/
      .transition().delay(2000).duration(1000)
      .attr('stroke', '#0089ff')
      .attr('stroke-width', 20);
      //.attr('stroke-dasharray', '1 2');
    this.visualisationService.createArc(svg, 0, 148, 115, 0, 0)
      .attr('transform', 'translate(170,175) rotate(-122.3)')
      .attr('fill', 'white')
      .transition().delay(1000).duration(1000).attrTween('d', () => {
      return (t) => {
        const angle = d3.interpolate(Math.PI * 0.006, Math.PI * 0.006 + Math.PI * this.dataService.statistics[1].percent * 1.353)(t);
        const angle1 = d3.interpolate(0, Math.PI * this.dataService.statistics[1].percent * 1.353)(t);
        return d3.arc()({
          outerRadius: 148,
          innerRadius: 115,
          startAngle: angle1,
          endAngle: angle
        });
      }
    });
    this.visualisationService.createArc(svg, 0, 105, 105, -Math.PI * 0.68, Math.PI * 0.68)
      .attr('transform', 'translate(170,175)')
      .attr('fill', 'none')
      .attr('stroke', '#1e212d')
      .attr('stroke-width', 4)
      .attr('stroke-dasharray', '2 5');
    this.visualisationService.createText(svg, this.dataService.statistics[1].str, 160, 100, 'start', 19.5833, '24px', '#606580');
    this.visualisationService.createText(svg, this.dataService.statistics[1].totality, 120, 141, 'start', 31.3333, '31px', '#D7E2F2');
    this.visualisationService.createLine(svg, 107, 151, 230, 151, '#1e212d', 2, '2');
    this.visualisationService.createText(svg, this.dataService.statistics[1].inWork, 127, 186, 'start', 27.4167, '33px', '#0089FF');
    this.visualisationService.createText(svg, this.dataService.statistics[1].completed, 135, 232, 'start', 23.5, '28px', '#F7931E');
    this.visualisationService.createText(svg, this.dataService.statistics[1].workName.split(' ')[0], 141, 262, 'start', 23.5, '28px', '#D7E2F2');
    this.visualisationService.createText(svg, this.dataService.statistics[1].workName.split(' ')[1], 98, 287, 'start', 23.5, '28px', '#D7E2F2');
    svg.attr('transform', 'scale(1.2)');
  }

}
