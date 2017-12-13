import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  note: Note = new Note();
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._noteService.addNote(this.note);
  }

}
