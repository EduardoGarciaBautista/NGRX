import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../app.reducers';
import * as actions from '../counter.actions';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})

export class ChildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<IAppState>) {
    store.select('counter').subscribe((counter) => {
      this.counter = counter;
    });
  }

  ngOnInit(): void {
  }

  multiply(): void {
    this.store.dispatch(actions.multiply({numberValue: 2}));
  }

  divide(): void {
    this.store.dispatch(actions.divide({numberValue: 3}));
  }

}
