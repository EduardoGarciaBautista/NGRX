import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from './counter/counter.actions';
import {IAppState} from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  counter: number;

  constructor(private store: Store<IAppState>) {
    store.select('counter')
      .subscribe(counter => this.counter = counter);
  }

  increment(): void {
    this.store.dispatch(actions.increment());
  }

  decrement(): void {
    this.store.dispatch(actions.decrement());
  }

  onCounterChange(newValue: number): void {
    this.counter = newValue;
  }
}
