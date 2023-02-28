import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  myClickFunction() { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Thank You For The Payment");
    this.router.navigate(['productList']);
    
 }
}
