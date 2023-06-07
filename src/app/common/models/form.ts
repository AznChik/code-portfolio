import { FormControl, FormGroup } from "@angular/forms";

export const Form: FormGroup = new FormGroup({
    street: new FormControl(null),
    city: new FormControl(null),
    state: new FormControl(null),
    country: new FormControl(null),
    zip: new FormControl(null)
});
