import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {
  displayPara = false;
  btnClick = [];
  showParagraph() {
    this.displayPara = !this.displayPara;
    this.btnClick.push(this.btnClick.length + 1);
  }
}
