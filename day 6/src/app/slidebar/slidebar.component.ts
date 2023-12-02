import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
//variable
viewname = "Eman";
viewnamelast = "Ahmed";
viewnumber = "10";
img:any = "../imgs/quote5";

textdata ="";

//return
getname(){
  return this.viewname;
}
getnamee(){
  return this.viewnamelast;
}
getnumber(){
var numb = this.viewnumber + 30;
var sum = numb + 50;
 return sum;
}
event:any = "";
onclick(event:any){
  console.log(event);
}
}
