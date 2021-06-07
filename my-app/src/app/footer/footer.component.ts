import { Component, OnInit } from '@angular/core';
import {FunctionalService} from '../service/functional.service';
import {Istatus} from '../service/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public functionalService: FunctionalService) { }
  public isSelect(elem: Istatus): void{
    if (elem.status === 'Отработано'){
      this.functionalService.dataService.allFilters.statusFilterValue = 'Завершено';
    } else {
      this.functionalService.dataService.allFilters.statusFilterValue = elem.status;
    }
    this.functionalService.filterData();
  }

  ngOnInit(): void {
  }

}
