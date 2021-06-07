import {Component, Input, OnInit} from '@angular/core';
import {IPostData} from '../service/data.service';
import {FunctionalService} from '../service/functional.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input() data: IPostData;
  @Input() index: number;
  constructor(public functionalService: FunctionalService) { }

  ngOnInit(): void {
  }

}
