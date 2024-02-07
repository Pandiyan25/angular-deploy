import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchValue = new FormControl('');
  @Output() searchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onTextChange() {
    this.searchTextChanged.emit(this.searchValue.value);
  }
}
