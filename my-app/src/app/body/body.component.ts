import { Component, OnInit } from '@angular/core';
import {FunctionalService} from '../service/functional.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  constructor(public functionalService: FunctionalService) { }
  ngOnInit(): void {
  }

}
