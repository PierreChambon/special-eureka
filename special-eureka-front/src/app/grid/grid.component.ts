import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/Cell'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  constructor() { }

  number_rows = 5
  number_cols = 5
  test_grid = [new Cell(0,0,4), new Cell(0,1,7), new Cell(1,1,16), new Cell(3,2,20), new Cell(4,3,12)]
  grid : Cell[][];

  activeCell = null
  clicked = null


  ngOnInit() {
    this.initialize_grid()
    this.fill_grid()
  }


  /**
  * Creates an empty grid
  */
  initialize_grid(){
    this.grid = []
    for(let i=0; i<this.number_rows; i++){
      this.grid[i] = []
      for(let j=0; j<this.number_cols; j++){
        //this.grid[i][j] = new Cell(i,j,5*i + j + 1)
        this.grid[i][j] = new Cell(i,j)
        this.grid[i][j].isGiven = false
      }
    }
  }

  /**
  * Fills the grid with the test_grid
  */
  fill_grid(){
    for(let cell of this.test_grid){
      this.grid[cell.row][cell.col] = cell
    }
  }

  enterCell(cell){
    this.activeCell = cell
  }

  leaveCell(){
    this.activeCell = null
  }

  clickedCell(cell){
    this.clicked = cell
  }

  isNeighbourCell(cell){
    return (cell.row == this.activeCell.row) && (cell.col == this.activeCell.col + 3) ||
           (cell.row == this.activeCell.row) && (cell.col == this.activeCell.col - 3) ||
           (cell.row == this.activeCell.row + 3) && (cell.col == this.activeCell.col) ||
           (cell.row == this.activeCell.row - 3) && (cell.col == this.activeCell.col) ||
           (cell.row == this.activeCell.row + 2) && (cell.col == this.activeCell.col + 2) ||
           (cell.row == this.activeCell.row + 2) && (cell.col == this.activeCell.col - 2) ||
           (cell.row == this.activeCell.row - 2) && (cell.col == this.activeCell.col + 2) ||
           (cell.row == this.activeCell.row - 2) && (cell.col == this.activeCell.col - 2)
  }

}
