import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.view.html',
})
export class GridComponent {
  gridCols: Array<any> = new Array<any>();
  gridData: Array<any> = new Array<any>();

  @Input('grid-cols')
  set setGridCols(_gridCols: Array<any>) {
    this.gridCols = _gridCols;
  }

  @Input('grid-data')
  set setGridData(_gridData: Array<any>) {
    this.gridData = _gridData;
  }

  @Output('grid-selected')
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();
  select(_selected: any) {
    this.eventEmitter.emit(_selected);
    console.log(_selected);
  }
}
