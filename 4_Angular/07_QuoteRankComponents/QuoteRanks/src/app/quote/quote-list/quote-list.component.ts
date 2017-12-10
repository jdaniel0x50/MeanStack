import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  constructor() { }
  @Input() quotes: Array<Quote>;
  @Output() isQuotesList = new EventEmitter();

  ngOnInit() {
  }
  onClickVoteUp(idx: number) {
    this.quotes[idx].votes += 1;
    this.onVoteSort();
  }
  onClickVoteDown(idx: number) {
    this.quotes[idx].votes -= 1;
    this.onVoteSort();
  }
  onClickDelete(idx: number) {
    this.quotes.splice(idx, 1);
    if (this.quotes.length === 0) {
      this.isQuotesList.emit(false);
    } else {
      this.isQuotesList.emit(true);
    }
  }
  onVoteSort() {
    for (let idx: number = this.quotes.length - 1; idx > 0; idx--) {
      for (let compareIdx: number = idx - 1; compareIdx >= 0; compareIdx--) {
        if (this.quotes[idx].votes > this.quotes[compareIdx].votes) {
          let tempQuote = this.quotes[idx];
          this.quotes[idx] = this.quotes[compareIdx];
          this.quotes[compareIdx] = tempQuote;
        }
      }
    }
  }
}
