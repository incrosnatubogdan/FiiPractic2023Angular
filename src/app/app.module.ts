import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { StructuralDirectivesComponent } from './shared/components/structural-directives/structural-directives.component';
import { NotesFormComponent } from './notes/notes-form/notes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    StructuralDirectivesComponent,
    NotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
