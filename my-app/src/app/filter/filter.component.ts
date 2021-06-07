import {Component, Input, OnInit} from '@angular/core';
import {IFilterBlockData} from '../service/data.service';
import {FunctionalService} from '../service/functional.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() data: IFilterBlockData;
  constructor(public functionalService: FunctionalService) { }
  public flag: boolean = false;
  public isSelect(): void{
    const index: number = this.functionalService.dataService.allFilters.subcategoryFiltersValue.indexOf(this.data.subcategory);
    if (index === -1){
      this.functionalService.dataService.allFilters.subcategoryFiltersValue.push(this.data.subcategory);
    } else {
      this.functionalService.dataService.allFilters.subcategoryFiltersValue.splice(index, 1);
    }
    this.functionalService.filterData();
  }
  ngOnInit(): void {
  }

}
