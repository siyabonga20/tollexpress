import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PAYMENT_URL } from '../app-config';
import { PaymentDTO } from '../dto/payment.dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private readonly httpService: HttpClient) { }

  async paymentRequest(payload: PaymentDTO){
     
    const paymentPayload = {
      "amount": payload.amount,
      "customerEmail": "",
      "customerFirstName": "",
      "customerLastName": "",
      "customerPhone": payload.phoneNumber,
      "wallet": payload.phoneNumber,
      "apiKey": "ef72ec9d-a429-4333-a38e-5f757dc13b05"
    }

   return await this.httpService.post(PAYMENT_URL+'/debit', paymentPayload).subscribe(
     (response) => {
       console.log(response);

       return response;
       
     }
   )
  }
}
