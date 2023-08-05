import { Component, OnInit } from '@angular/core';
import { UserClass } from '../UserClass';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  //inject the service
  constructor(private service:DataService){}
  users:UserClass[];

  ngOnInit(): void {
    
    this.service.getAllUsers().subscribe(result=>this.users=result);
  }

}
