import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NotesAppFiiPractic';
  numberOfCards: string[] = ['#FD99FF', '#FF9E9E', '#91F48F', '#FFF599', '#FD99FF', '#FF9E9E', '#91F48F', '#FFF599']
}
