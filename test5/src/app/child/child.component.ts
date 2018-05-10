import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
message:string;
  @Output() update = new EventEmitter<string>();
  sendMessage(){
    this.update.emit(this.message);
  }
submit(value){
  console.log(value);

}
}
