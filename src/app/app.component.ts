import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './modules/shared-data-service/shared-data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private sharedData :SharedDataService){ }

  ngOnInit(){

    this.sharedData.subscribe('title', data=>{
      this.title = data;
    });
    setTimeout(()=>{
      this.sharedData.publish('title', "NOVO TITLE");
    },10000);


  }
}
