import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  todoList:any = [];

  constructor(private crudHttpService: CrudHttpService,private router: Router){}

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  btnClick=  () => {
    this.router.navigate(['payment']);
};
}
