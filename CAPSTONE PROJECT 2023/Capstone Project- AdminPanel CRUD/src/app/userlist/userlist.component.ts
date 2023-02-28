import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private router:Router, private service:DataService) { }
  users:UserClass[];


  ngOnInit(): void {
    this.service.getAllUser().subscribe(result=>this.users=result);
  }
  DeleteUserById(id:number){
    //refresh the list once user is deleted
    this.users=this.users.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("user Deleted");
  }

}
