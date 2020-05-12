import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  saved = false;

  constructor() { }

  ngOnInit() {
  }

  onSave(e) {
    e.preventDefault();

    this.saved = true;
  }
}
