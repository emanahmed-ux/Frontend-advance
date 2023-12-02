import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Input() childData: any;
  dataFromChild: any;
  dataFromParent: any;

  getChildData(data: any): void{
    console.log("child data:", data);
    this.dataFromChild = data;
  }

  sendDataToChild(){
    this.dataFromParent = {
      username: "eman ahmed mohamed hassan",
      useremail: "fkkkgsm@gmail.com"
    };
  }
  
}


