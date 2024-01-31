import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {
  paragraph = "";
  count = 0;
  btnClick = [];
  showParagraph() {
    this.paragraph = "Secret Password = 'tuna'"
  }
  updateCount() {
    this.btnClick.push(++this.count);
    console.log(this.btnClick);
  }
  showColor() {
    return this.btnClick.length >= 5 ? 'blue' : 'white';
  }

}
