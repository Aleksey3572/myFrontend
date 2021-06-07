import { Component, OnInit } from '@angular/core';
import {FunctionalService} from '../service/functional.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public functionalService: FunctionalService) { }
  public list: string[] = ['assets/long_task_icon.svg', 'assets/block_task_icon.svg', 'assets/option.svg'];
  public onSelectItem(index: number): void {
    this.functionalService.activeIndex = index;
  }
  public searchTitle(): void{
    this.functionalService.filterData();
  }
  ngOnInit(): void {
  }

}
