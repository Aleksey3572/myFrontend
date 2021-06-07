import {Component, Input, OnInit} from '@angular/core';
import {IParameter} from '../service/data.service';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {
  @Input() data: IParameter;
  constructor() { }
  public flag: boolean = true;
  public index: number;
  public deviation: number = 0;
  public checkDeviation(): void{
    this.data.works.forEach(elem => {
      if (elem.dataModel !== elem.dataFact){
        this.deviation++;
      }
    });
  }
  public isSelect(): void{
    this.flag = !this.flag;
  }
  public isElem(index: number): void{
    this.index = index;
  }
  public deleteFocus(): void{
    this.index = -1;
  }
  ngOnInit(): void {
    this.checkDeviation();
  }

}
