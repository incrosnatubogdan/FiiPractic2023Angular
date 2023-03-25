import { Component, Input } from '@angular/core';
import { INote } from '../shared/interfaces/note.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  @Input() notes: INote[] = [];
  public isFormVisible: boolean = true

  onNoteSubmit(event: INote) {
    this.notes.push(event)
  }
}
