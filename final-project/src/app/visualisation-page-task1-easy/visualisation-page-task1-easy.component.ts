import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {DataService} from '../service/data.service';
import {VisualisationService} from '../service/visualisation.service';

@Component({
  selector: 'app-visualisation-page-task1-easy',
  templateUrl: './visualisation-page-task1-easy.component.html',
  styleUrls: ['./visualisation-page-task1-easy.component.scss']
})
export class VisualisationPageTask1EasyComponent implements OnInit {

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
    this.visualisationService.createCircle(svg, 170, 170, 134, 'none', '#1e212d', 5);
    this.visualisationService.createCircle(svg, 170, 170, 127.5, 'none', 'rgba(247, 147, 30, 0.2)', 8);
    this.visualisationService.createArc(svg, 30, 131.2, 123.8, 0.009, 0)
      .attr('transform', 'translate(170,170)')
      .attr('fill', 'white')
      .transition().delay(400).duration(1000).attrTween('d', () => {
      return (t) => {
        const angle = d3.interpolate(0, Math.PI * 2 * this.dataService.statistics[0].percent)(t);
        return d3.arc().cornerRadius(30)({
          outerRadius: 131.2,
          innerRadius: 123.8,
          startAngle: 0,
          endAngle: angle
        });
      }
    });
    this.visualisationService.createCircle(svg, 170, 170, 121, 'none', '#1e212d', 5);
    this.visualisationService.createText(svg, this.dataService.statistics[0].str, 160, 85, 'start', 23.9286, '29px', '#575b75');
    this.visualisationService.createText(svg, this.dataService.statistics[0].workName, 115, 135, 'start', 23.9286, '29px', '#D7E2F2');
    this.visualisationService.createText(svg, this.dataService.statistics[0].totality, 132, 183, 'start', 28.7143, '35px', '#D7E2F2');
    this.visualisationService.createText(svg, this.dataService.statistics[0].inWork, 132, 220, 'start', 28.7143, '35px', '#0089FF');
    this.visualisationService.createText(svg, this.dataService.statistics[0].completed, 132, 265, 'start', 28.7143, '35px', '#F7931E');
  }

}
