import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {RootObject} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) {
    this.getTasks();
   }

  getTasks() {
    return this._http.get('/tasks');
    // tempobserverable.subscribe(data => console.log('our data ! ______', data));
    }
    // let pokemon_a = this._http.get('/https://pokeapi.co/api/v2/pokemon/1/');
    //   pokemon_a.subscribe(gotback => console.log('what we got back', gotback));

  

  // makeACall(url : string) {
  //   let ourobserver = this._http.get(url);
  //   ourobserver.subscribe(data => console.log('the data coming back ______ !!', data))
  // }

}
