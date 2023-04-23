import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { MedicineClass } from '../MedicineClass';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  //inject the service
  constructor(private service:FileUploadService) { }

  medicine:MedicineClass[];


  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result1=>this.medicine=result1);
  }

  DeleteMedicineById(id:number){
    //refresh the list once user is deleted
    this.medicine=this.medicine.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("user Deleted");
  }

}
