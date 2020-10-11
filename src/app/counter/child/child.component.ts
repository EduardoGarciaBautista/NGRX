import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})

export class ChildComponent implements OnInit {

  @Input() counter: number;

  @Output() changeCounter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  multiply(): void {
    this.counter = this.counter * 2;
    this.changeCounter.emit(this.counter);
  }

  divide(): void {
    this.counter = this.counter / 2;
    this.changeCounter.emit(this.counter);
  }
  reset(value): void {
    this.counter = value;
    this.changeCounter.emit(value);
  }
}
