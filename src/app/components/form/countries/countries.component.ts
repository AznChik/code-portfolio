import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/common/models/form';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  @Input() form: FormGroup = Form;
}
