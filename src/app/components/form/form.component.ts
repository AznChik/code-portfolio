import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/common/models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() event: EventEmitter<FormGroup> = new EventEmitter();
  public countryEvent: string = '';
  public form: FormGroup = Form;
  public invalidFields: boolean[] = [];

  public onSubmit(): void {
    const city = document.getElementById('city') as HTMLElement;
    const country = document.getElementById('country') as HTMLElement;
    const state = document.getElementById('state') as HTMLElement;
    const street = document.getElementById('street') as HTMLElement;
    const zip = document.getElementById('zip') as HTMLElement;
    
    this.invalidFields = [false, false, false, false, false];
    switch (true) {
      case this.form.controls['street'].invalid:
        this.invalidFields[0] = true;
        street.focus();
        break;
      case this.form.controls['city'].invalid:
        this.invalidFields[1] = true;
        city.focus();
        break;
      case this.form.controls['state'].invalid:
        this.invalidFields[2] = true;
        state.focus();
        break;
      case this.form.controls['country'].invalid:
        this.invalidFields[3] = true;
        country.focus();
        break;
      case this.form.controls['zip'].invalid:
        this.invalidFields[4] = true;
        zip.focus();
        break;
      default:
        this.event.emit(this.form);
    }
  }
}
