import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() ratings: number = 0;
  @Input() offers: number = 0;

  selectedValue: string = 'all';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onradioChange() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedValue);
    // console.log(this.selectedValue);
  }
}
