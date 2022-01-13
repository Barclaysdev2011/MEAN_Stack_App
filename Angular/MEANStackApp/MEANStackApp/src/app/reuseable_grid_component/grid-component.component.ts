import { Component, Input, OnInit } from '@angular/core';
import { GridColumns, GridOptions } from './grid_config.model';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent implements OnInit {
  @Input('gridOption')
  gridOption!: GridOptions;
  
  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

}
