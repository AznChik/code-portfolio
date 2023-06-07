import { FormControl, FormGroup, Validators } from "@angular/forms";

export const Form: FormGroup = new FormGroup({
    street: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+(\s[A-Z][a-z]*)+\.$/),
    ]),
    city: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/)
    ]),
    state: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    zip: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{5}-\d{4}$/)
    ])
});
