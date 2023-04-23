import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from './UserClass';
import { MedicineClass } from './MedicineClass';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  //private baseUrl = 'http://localhost:8082/api/upload/';

  private baseUrl = 'http://localhost:8082/api/mymedicine/';
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
  
	formData.append('files', file);
  //formData.append('customer', JSON.stringify(new MedicineClass('Nikunj')));
 
  //formData.append('customer', JSON.stringify(new MedicineClass('Nikunj')))
	 
	const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
 
     
    return this.http.request(req);
  }

  uploadFiles(file: File,data:any){

     //data:MedicineClass;

    //let userJSON = JSON.stringify(new MedicineClass(data.get(0)));
    const formData: FormData = new FormData();
  
	  formData.append('files', file);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', data.price);
    


    
    
    return this.http.post(this.baseUrl, formData);
     
  }
  
    

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}files`);
	
  }


  getAllMedicine():Observable<MedicineClass[]>{
    return this.http.get<MedicineClass[]>(this.baseUrl);
  }
  //get user by id
  getMedicineById(id:number):Observable<MedicineClass>{
    return this.http.get<MedicineClass>(this.baseUrl+id);
  }
   
  //create record
  create(data:any ):Observable<any>{
    return this.http.post(this.baseUrl,data).pipe();
  }
  //deleteById
  deleteById(id:number){
    let myid=id;
    this.http.delete(this.baseUrl+myid).subscribe(data=>{
      return this.getAllMedicine();
    });
  }

  //update user
  updateMed(cust:MedicineClass,id:number){
    return this.http.put(this.baseUrl+id,cust);
  }
  
}