import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentDTO } from '../dto/payment.dto';
import { PaymentServiceService } from '../services/payment-service.service';

declare var totalA:any;
declare var totalB:any;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  
  paymentForm = new FormGroup({
    numberOfTollGates: new FormControl(''),
    amountToPay: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  response = '';
  
  constructor(
    private fb: FormBuilder,
    private readonly paymentService: PaymentServiceService
    ){}

  ngOnInit(): void {

  }
  

  totalA(){


    totalA();
  }

  totalB(){

    totalB();
  }

  async makePayment(payload: any) {
    console.log(payload);

    const amount = payload.numberOfTollGates * payload.amountToPay;

    console.log(amount);


    
    const sendPayload: PaymentDTO = {
      amount: amount,
      phoneNumber: payload.phoneNumber
    }

    console.log(sendPayload);

    return (await this.paymentService.paymentRequest(sendPayload)).subscribe(res => {
      console.log(res);
      if(res.status == 200){
        this.response = "Please enter pin on the push notification you will get on your phone to process your transaction."
      }else{
        this.response = "Failed To Process transaction"
      }
      
    });
    
  }

}
