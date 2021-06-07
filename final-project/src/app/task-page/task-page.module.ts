import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {DataPageComponent} from '../data-page/data-page.component';
import {DropMenuComponent} from '../drop-menu/drop-menu.component';
import {VisualisationPageTask1EasyComponent} from '../visualisation-page-task1-easy/visualisation-page-task1-easy.component';
import {VisualisationPageTask1MediumComponent} from '../visualisation-page-task1-medium/visualisation-page-task1-medium.component';
import {VisualisationPageTask1HardComponent} from '../visualisation-page-task1-hard/visualisation-page-task1-hard.component';
import {DataService} from '../service/data.service';
import {VisualisationService} from '../service/visualisation.service';
import {DataGuard} from '../guard/data.guard';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    TaskPageComponent,
    DataPageComponent,
    DropMenuComponent,
    VisualisationPageTask1EasyComponent,
    VisualisationPageTask1MediumComponent,
    VisualisationPageTask1HardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'task', component: TaskPageComponent, canActivate: [DataGuard], children: [
          { path: 'data', component: DataPageComponent},
          { path: 'visualisation/1', component: VisualisationPageTask1EasyComponent},
          { path: 'visualisation/2', component: VisualisationPageTask1MediumComponent},
          { path: 'visualisation/3', component: VisualisationPageTask1HardComponent}
        ]
      },
      {path: '**', redirectTo: '/login', pathMatch: 'full'}
    ]),
    AngularSvgIconModule,
  ],
  providers: [VisualisationService, DataGuard],
  bootstrap: [TaskPageComponent]
})
export class TaskPageModule { }
