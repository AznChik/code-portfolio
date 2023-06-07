import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from 'src/app/common/models/form';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent {
  @Input() form: FormGroup = Form;
}
