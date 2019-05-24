import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  number_rows = 5
  number_cols = 5

  grid;

  ngOnInit() {
    this.initialize_grid()
    console.log(this.grid)
  }

  initialize_grid(){
    this.grid = []
    for(let i=0; i<this.number_rows; i++){
      this.grid[i] = []
      for(let j=0; j<this.number_cols; j++){
        this.grid[i][j] = 5*i + j + 1
      }
    }
  }

}
