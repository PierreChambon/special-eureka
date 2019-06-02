import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Cell } from '../models/Cell';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

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

  saveGrid() {
    firebase.database().ref('/currentGrid').set(this.grid);
  }

  getGrid() {
    firebase.database().ref('/currentGrid').on('value', (data: DataSnapshot) => {
      this.grid = data.val() ? data.val() : [];
      this.emitGrid();
      }
    );
  }
}
