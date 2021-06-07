import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';


@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.scss']
})
export class DataPageComponent implements OnInit {

  constructor(public dataService: DataService) {}
  ngOnInit(): void {

  }

}
