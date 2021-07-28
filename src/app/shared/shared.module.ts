import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './../pipe/search-filter.pipe';
import { ListItemComponent } from './list-item/list-item.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SpinnerComponent,
    ListComponent,
    SearchFilterPipe,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[SpinnerComponent , ListComponent]
})
export class SharedModule { }
