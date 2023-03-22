import { Component } from '@angular/core';
import { Note } from '../shared/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  public model = new Note(1, 'Something that i have to do', 'i will figure something out', '');

  submitted = false;

  onSubmit() { this.submitted = !this.submitted; }

}
