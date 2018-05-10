import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message;
submit(value){
  this.message=value;
  console.log(value);

}
  constructor() { }

  ngOnInit() {
  }

}
