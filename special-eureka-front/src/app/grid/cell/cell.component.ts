import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../models/Cell'

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() cell : Cell

  @Output() enterCell : EventEmitter<Cell> = new EventEmitter()
  @Output() leaveCell : EventEmitter<any> = new EventEmitter()
  @Output() clickedCell : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onCellClick(){
    if (!this.cell.isGiven){
      this.clickedCell.emit(this.cell)
      //console.log(this.cell)
    }
  }

  onCellMouseOver(){
    //console.log("Enter")
    this.enterCell.emit(this.cell)
  }

  onCellMouseLeave(){
    //console.log("Leave")
    this.leaveCell.emit()
  }

}
