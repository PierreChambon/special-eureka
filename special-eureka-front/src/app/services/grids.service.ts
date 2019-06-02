import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Cell } from '../models/Cell';

@Injectable({
  providedIn: 'root'
})
export class GridsService {

  grid: Cell[][];
  gridSubject = new Subject<Cell[][]>();
  constructor() { }

  emitGrid() {
    this.gridSubject.next(this.grid);
  }
}
