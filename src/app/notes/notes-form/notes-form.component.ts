import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/shared/models/note.model';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss']
})
export class NotesFormComponent {
  @Output() onNoteSave = new EventEmitter();

  public model = new Note(1, 'Something that i have to do', 'i will figure something out', '', 'black');

  submitted = true;

  onSubmit() {

    this.submitted = !this.submitted;
    this.onNoteSave.emit(this.model);
  }
}
