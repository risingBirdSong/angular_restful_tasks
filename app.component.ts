import { Component , OnInit } from '@angular/core';
import { HttpService } from './http.service';
import {taskI} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks : taskI[] = [];
  title = 'public';

  num: number;
  randNum: number;
  str: string;
  firstName: string;
     

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTaskFromService();
    this.num = 7;
    this.randNum = Math.floor( (Math.random()  * 2 ) + 1);
    this.str = 'Hello Angular Developer!';
  }

  getTaskFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data : taskI[]) => {
      console.log("got our tasks!", data)
      this.tasks = data;
    });
  }

}
