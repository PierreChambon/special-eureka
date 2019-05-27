export class Cell {
    value: number
    isGiven: boolean
    row: number
    col: number
    constructor(row: number = -1, col:number = -1, value: number = -1, isGiven : boolean = true){
      this.value = value;
      this.isGiven = isGiven
      this.row = row
      this.col = col
    }
  }