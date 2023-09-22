import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../../../common/models/form';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnChanges {
  @Input() country: string = '';
  @Input() form: FormGroup = Form;
  @Output() event: EventEmitter<string> = new EventEmitter();
  public state: string = '';

  public ngOnChanges(): void {
    const option = document.getElementById('US') as HTMLElement;
    const selector = document.getElementById('country') as HTMLElement;

    if (this.country === 'US') {
      this.form.controls['country'].setValue('U4');
      option.setAttribute('selected', '');
      selector.setAttribute('disabled', '');
    } else {
      option.removeAttribute('selected');
      selector.removeAttribute('disabled');
    }
  }

  public onSelect(country: string): void {
    this.state = country != 'U4' ? '!US' : 'US';
    this.event.emit(this.state);
  }
}
