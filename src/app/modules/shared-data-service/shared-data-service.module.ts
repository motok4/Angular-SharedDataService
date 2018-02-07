import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from './shared-data-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[SharedDataService],
  exports:[]
})
export class SharedDataServiceModule { }
