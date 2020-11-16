import { Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Escaneate';
  
  items = ['Miguel', 'David', 'Ruiz', 'Sánchez' ]

  addItems(){

    this.items.push("Nuevo");

  }

  deleteItems(index: number){

    this.items.splice(index, 1);

  }
}
