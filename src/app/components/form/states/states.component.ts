import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/common/models/form';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent {
  @Input() form: FormGroup = Form;
  @Output() event: EventEmitter<string> = new EventEmitter();
  public country: string = '';

  public onSelect(state: string): void {
    this.country = state != 'NA' ? 'US' : '!US';
    this.event.emit(this.country);
  }
}
