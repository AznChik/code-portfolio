import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/common/models/form';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnChanges {
  @Input() country: string = '';
  @Input() form: FormGroup = Form;

  public ngOnChanges(): void {
    const option = document.getElementById('US') as HTMLElement;
    const selector = document.getElementById('country') as HTMLElement;

    if (this.country === 'US') {
      this.form.controls['country'].setValue('U4');
      option.setAttribute('selected', '');
      selector.setAttribute('disabled', '');
    } else {
      this.form.controls['country'].setValue(null);
      option.removeAttribute('selected');
      selector.removeAttribute('disabled');
    }
  }
}
