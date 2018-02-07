import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedDataServiceModule } from './modules/shared-data-service/shared-data-service.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedDataServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
