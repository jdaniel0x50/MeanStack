import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  constructor() { }
  title: string = "Quote";
  quote: Quote = new Quote();
  quotes: Array<Quote> = [];
  isQuotesList = false;

  ngOnInit() {
  }
  onSubmit() {
    this.isQuotesList = true;
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }
  onChangeQuotesList(value) {
    this.isQuotesList = value;
  }
}
