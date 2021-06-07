import {Component, Input, OnInit} from '@angular/core';
import {IPostData} from '../service/data.service';
import {FunctionalService} from '../service/functional.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data: IPostData;
  @Input() index: number;
  constructor(public functionalService: FunctionalService) { }
  public flag: boolean = false;
  public isSelect(): void {
    this.flag = !this.flag;
  }
  public closeSelectItem(): void {
    this.flag = false;
  }

  ngOnInit(): void {
  }

}
