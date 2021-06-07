import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { WorkComponent } from './work/work.component';
import { FilterComponent } from './filter/filter.component';
import {FunctionalService} from './service/functional.service';
import {DataService} from './service/data.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    DropDownMenuComponent,
    BodyComponent,
    FooterComponent,
    PostComponent,
    WorkComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AngularSvgIconModule.forRoot(), FormsModule
  ],
  providers: [FunctionalService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
