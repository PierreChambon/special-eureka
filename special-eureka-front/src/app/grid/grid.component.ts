import { Component, OnInit } from '@angular/core';

class Cell {
  value: number
  isGiven: boolean
  constructor(value: number = -1, isGiven : boolean = false){
    this.value = value;
    this.isGiven = isGiven
  }
}

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
    this.grid[0][0].isGiven = true
  }

  initialize_grid(){
    this.grid = []
    for(let i=0; i<this.number_rows; i++){
      this.grid[i] = []
      for(let j=0; j<this.number_cols; j++){
        this.grid[i][j] = new Cell(5*i + j + 1)
      }
    }
  }

}
