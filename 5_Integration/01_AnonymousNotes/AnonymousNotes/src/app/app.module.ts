import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteItemComponent } from './note-list/note-item/note-item.component';
import { NoteService } from './notes.service';
import { NoteListComponent } from './note-list/note-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteCreateComponent,
    NoteItemComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
