import {Action, createReducer, on} from '@ngrx/store';
import {decrement, divide, increment, multiply, reset} from './counter.actions';

const initialState = 10;

const counterReducer1 = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, {numberValue}) => state * numberValue),
  on(divide, (state, {numberValue}) => state / numberValue),
  on(reset, () => 0)
);
export function counterReducer(state, action): number {
  return counterReducer1(state, action);
}
