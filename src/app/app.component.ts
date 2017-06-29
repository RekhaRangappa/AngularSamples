import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <div *ngFor="let employee of employees">
            <p>{{employee.name}}</p>
            <p>{{employee.place}}</p>
            <p>{{employee.job}}</p>
            </div>`,
  styles: ['div { font-weight: normal;height:10%;width:20%;background-color:yellow; }']
})
export class AppComponent  { 
  name = 'Angular'; 
  employees = [{
        name: "Rekha",
        place: "J.P.Nagar",
        job: "Software Developer"
    },
    {
        name: "Akshatha",
        place: "JayaNagar",
        job: "Software Developer"
    },
    {
        name: "Hari",
        place: "RajajiNagar",
        job: "UI Developer"
    }];
}
