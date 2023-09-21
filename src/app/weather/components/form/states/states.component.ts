import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/weather/common/models/form';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnChanges {
  @Input() form: FormGroup = Form;
  @Input() state: string = '';
  @Output() event: EventEmitter<string> = new EventEmitter();
  public country: string = '';

  public ngOnChanges(): void {
    const option = document.getElementById('NA') as HTMLElement;
    const selector = document.getElementById('state') as HTMLElement;

    if (this.state === '!US') {
      this.form.controls['state'].setValue('NA');
      option.setAttribute('selected', '');
      selector.setAttribute('disabled', '');
    } else {
      option.removeAttribute('selected');
      selector.removeAttribute('disabled');
    }
  }

  public onSelect(state: string): void {
    this.country = state != 'NA' ? 'US' : '!US';
    this.event.emit(this.country);
  }
}
