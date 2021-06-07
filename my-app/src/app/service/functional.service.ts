import { Injectable } from '@angular/core';
import {DataService, IPostData} from './data.service';

@Injectable()
export class FunctionalService {
  constructor(public dataService: DataService) {
  }
  public activeIndex: number = 0;
  public menu1: string = 'Установка';
  public menu2: string = 'Приоритет';
  public showData: IPostData[] = [...this.dataService.postData];

  public installationFilter = (elem: IPostData) => (elem.installation === this.dataService.allFilters.installationFilterValue) ||
    (this.dataService.allFilters.installationFilterValue === 'Выбрать все');
  public priorityFilter = (elem: IPostData) => (elem.priority === this.dataService.allFilters.priorityFilterValue) ||
    (this.dataService.allFilters.priorityFilterValue === 0);
  public searchFilter = (elem: IPostData) => (elem.title.toLowerCase().includes(this.dataService.allFilters.searchFilterValue.toLowerCase())) ||
  this.dataService.allFilters.searchFilterValue === '';
  public statusFilter = (elem: IPostData) => (this.dataService.allFilters.statusFilterValue === 'Все') ||
    (elem.status === this.dataService.allFilters.statusFilterValue) || (elem.state === this.dataService.allFilters.statusFilterValue);
  public subcategoryFilters = (elem: IPostData) => (this.dataService.allFilters.subcategoryFiltersValue.indexOf(elem.subcategory) !== -1) ||
    (this.dataService.allFilters.subcategoryFiltersValue.length === 0);

  public filterData(): void{
    this.showData = [...this.dataService.postData].filter(this.installationFilter).filter(this.priorityFilter)
      .filter(this.searchFilter).filter(this.statusFilter).filter(this.subcategoryFilters);
  }

  public clearFilters(): void{
    this.menu1 = 'Установка';
    this.menu2 = 'Приоритет';
    this.dataService.allFilters.installationFilterValue = 'Выбрать все';
    this.dataService.allFilters.priorityFilterValue = 0;
    this.dataService.allFilters.searchFilterValue = '';
    this.dataService.allFilters.statusFilterValue = 'Все';
    this.dataService.allFilters.subcategoryFiltersValue = [];
    this.filterData();
  }

  public deleteElement(elem: IPostData): void{
    const index: number = this.dataService.postData.indexOf(elem);
    this.dataService.postData.splice(index, 1);
    this.dataService.dropMenuItems1 = this.dataService.fillDropMenuItems();
    this.dataService.updateStatusBlock(elem);
    this.filterData();
  }
}
