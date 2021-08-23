import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   data = [];
 

  sendComplete(_event: any){
   this.data = _event;
  }

  newProcess(){
    this.data =  [];
  }
}
