// child.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() dataFromParent: { username: string, useremail: string } | undefined;
  @Output() childData = new EventEmitter<{ username: string, useremail: string }>();

  constructor() { }

  ngOnInit(): void {
    
  }

  submitForm(data: { username: string, useremail: string }): void {
    console.log("child data:", data);
    this.childData.emit(data);
  }
}
