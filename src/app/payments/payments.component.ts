import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentServiceService } from '../services/payment-service.service';

declare var totalA:any;
declare var totalB:any;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  
  numberOfTollGates: number;
  amountToPay: number;
  paymentForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private readonly paymentService: PaymentServiceService
    ){}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      numberOfTollGates: [null, [Validators.required]],
      amountToPay: [null, [Validators.required]]
    })
  }
  

  totalA(){


    totalA();
  }

  totalB(){

    totalB();
  }







  

  async makePayment(payload: any) {
    console.log(payload);
    
  }

}
