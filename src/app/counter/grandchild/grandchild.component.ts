import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../app.reducers';
import {reset} from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<IAppState>) {
    store.select('counter').subscribe((counter) => {
      this.counter = counter;
    });
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
