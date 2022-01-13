import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
payments:any=[];
  constructor(private http:HttpClient) {
   
   }

   getPayments(){
     return this.http.get<any>('http://localhost:3000/getAllPayments');
   }

   searchByPayment(search:any){
     return this.http.post<any>('http://localhost:3000/getAllPayments',search);
   }
}
