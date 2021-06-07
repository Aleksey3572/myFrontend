import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  constructor(public dataService: DataService, private router: Router) {}
  public selectElem(elem: number): void{
    if (elem === 1){
      this.dataService.buttonSelect = 1;
      this.router.navigate(['/task/visualisation/1']);
    }
    if (elem === 2){
      this.dataService.buttonSelect = 2;
      this.router.navigate(['/task/data']);
    }
    if (elem === 3){
      this.dataService.buttonSelect = 0;
      this.dataService.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
    if (elem === 4){
      this.dataService.buttonSelect = 4;
      this.router.navigate(['/task/visualisation/2']);
    }
    if (elem === 5){
      this.dataService.buttonSelect = 5;
      this.router.navigate(['/task/visualisation/3']);
    }
  }

  ngOnInit(): void {
  }

}
