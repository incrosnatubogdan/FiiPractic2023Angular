import { Component } from '@angular/core';
import { INote } from './shared/interfaces/note.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes App';
  public notes: INote[] = [
    { id: 1, title: 'first note', description: 'some description', color: 'red' },
    { id: 2, title: 'second note', description: 'some description', color: 'blue' },
    { id: 3, title: 'third note', description: 'some description', color: 'green' },
    { id: 4, title: 'forth note', description: 'some description', color: 'black' },
    { id: 5, title: 'fifth note', description: 'some description', color: 'yellow' },
  ]
}
