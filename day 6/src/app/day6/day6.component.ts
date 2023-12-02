import { Component } from '@angular/core';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component {
  exampleProperty: any = 'Enter Value';

  logInputValue(value: any) {
    console.log('Input value:', value);
  }

}
