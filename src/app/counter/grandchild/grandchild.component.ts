import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {

  @Input() counter: number;

  @Output() resetChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.counter = 0;
    this.resetChange.emit(0);
  }
}
