import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GridColumns, GridOptions } from '../reuseable_grid_component/grid_config.model';
import { PaymentService } from '../services/services/payment.service';

@Component({
  selector: 'app-veiw-details',
  templateUrl: './veiw-details.component.html',
  styleUrls: ['./veiw-details.component.scss']
})
export class VeiwDetailsComponent implements OnInit {
  gridOption!: GridOptions;
  login!: FormGroup;
  constructor(private readonly paymentService:PaymentService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      search:new FormControl('')
    })
    this.initGrid();
   
  }

  onSearch(){
    const search= this.login.value;
    if(search !==""){
    this.gridOption.Rows = [];
    this.paymentService.searchByPayment(this.login.value).subscribe(p=>{
      this.gridOption.Rows.push(p)
    });
  }else{
    this.initGrid();
  }
  }
  initGrid(){
    this.gridOption = new GridOptions();
    this.gridOption.columns =  [];
    this.gridOption.Rows = [];
    let col1 = new GridColumns();
   // col1 = new GridColumns();
    col1.fieldName = 'Creation Date';
    col1.fieldValue ='value_date';
    this.gridOption.columns.push(col1)
    col1 = new GridColumns();
    col1.fieldName = 'Status';
    col1.fieldValue ='status';
    this.gridOption.columns.push(col1);
    col1 = new GridColumns();
    col1.fieldName = 'Payment Type';
    col1.fieldValue ='payment_type';
    this.gridOption.columns.push(col1);
    col1 = new GridColumns();
    col1.fieldName = 'Amount';
    col1.fieldValue ='amount';
    this.gridOption.columns.push(col1);
    this.paymentService.getPayments().subscribe(p=>{
      this.gridOption.Rows =p;
    });
  }

}
