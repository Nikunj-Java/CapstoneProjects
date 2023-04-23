import { HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FileUploadService } from '../file-upload.service';
import { MedicineClass } from '../MedicineClass';

@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css']
})
export class MedicineFormComponent implements OnInit {

  isSubmitted= false;
  constructor(private service:FileUploadService,private router:Router ) { }


  ngOnInit(): void {
  }

  selectedFiles?: FileList;
	currentFile?: File;
	progress = 0;
	message = '';
	name:string='';

  medicine={
    name:'',
    description:'',
    category:'',
    price:'',
  }

  selectFile(event: any): void {
	  this.selectedFiles = event.target.files;
	}
  
  //add record
  addUser():void{
    const data={
      name:this.medicine.name,
      description:this.medicine.description,
      category:this.medicine.category,
      price:this.medicine.price,
      //file:this.currentFile,
    }
    /*if(!data.name){
      alert('please provide name');
      return;
    }
    if(!data.category){
      alert('please provide category');
      return;
    }
    if(!data.description){
      alert('please provide description');
      return;
    }
    if(!data.price){
      alert('please provide price');
      return;
    }
 
     /*this.service.create(data).subscribe(
      response=>{ console.log(response);
      this.isSubmitted=true},
      error=>{console.log(error);}
     );*/
      
 
    
     //this.service.uploadFiles(,data).subscribe();

     alert(data.name);
     this.progress = 0;
  
	  if (this.selectedFiles) {
		const file: File | null = this.selectedFiles.item(0);
		if (file) {
		  this.currentFile = file;
		  this.service.uploadFiles(this.currentFile,data).subscribe();
      
		}
		this.selectedFiles = undefined;
	  }
    this.router.navigate(['medicare']);
	}
  
  
}
