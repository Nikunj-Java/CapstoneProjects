import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';
import { MedicineClass } from '../MedicineClass';

@Component({
  selector: 'app-med-details',
  templateUrl: './med-details.component.html',
  styleUrls: ['./med-details.component.css']
})
export class MedDetailsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:FileUploadService) { }

  medicine:MedicineClass
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getMedicineById(Number(id)).subscribe(data=>this.medicine=data);
  }

}
