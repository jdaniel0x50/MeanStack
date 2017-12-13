import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Array<any> = [];
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.getNotes();
    this._noteService.noteObserver.subscribe(
      (noteData) => {
        console.log("Note data initialized or changed")
        console.log(noteData); 
        this.notes = noteData; 
      }
    );
  }

}
