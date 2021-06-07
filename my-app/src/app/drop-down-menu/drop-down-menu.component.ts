import {Input, Component, OnInit} from '@angular/core';
import {FunctionalService} from '../service/functional.service';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit{
  @Input() list: string[];
  @Input() name: string;
  constructor(public functionalService: FunctionalService) {
  }
  public flag: boolean = true;
  public isClick(): void{
    this.flag = !this.flag;
  }
  public closeDropDown(): void{
    this.flag = true;
  }
  public selectItem(item: string): void{
    if (this.name === 'Установка'){
      this.functionalService.menu1 = item;
      this.functionalService.dataService.allFilters.installationFilterValue = item;
    }
    if (this.name === 'Приоритет'){
     this.functionalService.menu2 = item;
      switch (item) {
        case 'Выбрать все': this.functionalService.dataService.allFilters.priorityFilterValue = 0; break;
        case 'Высокий': this.functionalService.dataService.allFilters.priorityFilterValue = 3; break;
        case 'Средний': this.functionalService.dataService.allFilters.priorityFilterValue = 2; break;
        case 'Стандартный': this.functionalService.dataService.allFilters.priorityFilterValue = 1; break;
      }
    }
    this.functionalService.filterData();
  }

  ngOnInit(): void {
  }

}
