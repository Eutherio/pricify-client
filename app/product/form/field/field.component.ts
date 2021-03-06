import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IField } from './field';

@Component({
  moduleId: module.id,
  selector: 'py-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.css']
})
export class FieldComponent implements OnInit {
  name: string;
  type: string = 'input';
  output: string;
  form: string;
  optionQty: number = 2;
  options: number[] = [1, 2];
  invisible: boolean = true;
  @Input() localId: number;
  @Input() formType: string;
  @Input() fieldsQty: number;
  @Output() removeClicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(){
    setTimeout(() => {
      this.invisible = false;
    }, 10);
  }
  removeMe(){
      this.invisible = true;
    setTimeout(() => {
      this.removeClicked.emit(this.localId);
    }, 200);
  }
  addOption(){
    let sorted = this.options.sort(),
        last = sorted[sorted.length - 1];
    
    this.options.push(last + 1)
  }
  removeOption(id: number): void{
    this.options = this.options.filter(e => e != id);
  }
}
