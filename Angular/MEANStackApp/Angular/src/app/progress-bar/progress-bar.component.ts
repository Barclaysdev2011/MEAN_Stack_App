import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input('progress') progress:number=90;
  @Input('total') total:number=100;
  color:string='';
  red:string='';
  constructor() { }

  ngOnInit(): void {
    if(this.progress>80){
      this.color='red';
      this.red='red'
    }
  }
  

}
