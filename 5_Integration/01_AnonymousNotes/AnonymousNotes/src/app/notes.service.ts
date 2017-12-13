import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import { Note } from './models/note';

let _dbUrl: string = "/mongoNotes";

@Injectable()
export class NoteService {
  noteObserver: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  updateData(newData: any): void {
    this.noteObserver.next(newData);
  }
  getNotes() {
    this._http.get(_dbUrl)
      .subscribe(
        response => {
          this.updateData(response.json())
        },
        error => this.updateData("ERROR")
      );
  }
  addNote(note: Note) {
    this._http.post(_dbUrl, note)
      .subscribe(
        response => {
          this.getNotes()
        },
        error => console.log(error)
      );
  }
// 
}
