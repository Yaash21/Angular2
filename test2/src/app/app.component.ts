import { Component, Input } from '@angular/core';
import { Service1Service } from './service1.service';
import {Observable} from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { ServiceInterface } from './serviceInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';
  constructor(private service:Service1Service){
  }
  public restaurant= [];
  public res =[];
    all: Object;
  @Input() message;
  @Input() id;
  @Input() name;
  @Input() location;
  @Input() cost;
  @Input() delt;


  addRestaurant($event,id,name,location,cost){
    console.log(event);
    this.service.addRestaurantService(this.id,this.name,this.location,this.cost).subscribe(
      data=>console.log(data)
    );
  }
  deleteById(event,delt){
    console.log(event);
    this.service.deleteRestaurantById(this.delt).subscribe(
    data => this.res=data);
  }
getById(event,value){
  console.log(value);
  console.log(event);
this.service.getRestaurantById(this.message).subscribe(
  data=>this.restaurant=data);
}
getByName(event,value){
  console.log(value);
  console.log(event);
  this.service.getRestaurantByName(this.message).subscribe(
    data=>this.restaurant=data);
}
getAll(){
  this.service.getAllRestaurants().subscribe(
    data =>this.all= data);
}

}
