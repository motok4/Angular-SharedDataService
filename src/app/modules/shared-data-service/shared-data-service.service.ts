import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedDataService {
  
  chanels: Map<any,any> = new Map();
  observable: Map<any,any> = new Map();
  constructor() { }

  verifyChannel(label: any) {
    if( !this.chanels.has(label) ){
      let hashmap = new BehaviorSubject<string>('');
      this.chanels.set( label, hashmap );
      this.observable.set(label, this.chanels.get(label).asObservable() ); 
    }
  }
  publish(label: any, mensagem: any){
    this.verifyChannel(label);
    this.chanels.get(label).next(mensagem);
  }
  subscribe(label: any, callback){
    this.verifyChannel(label);
    this.observable.get(label).subscribe(callback);

  }

}
