import { FormControl, FormGroup, Validators } from "@angular/forms";

export const MockForm: FormGroup = new FormGroup({
    street: new FormControl('1234 Name St.', [
        Validators.required,
        Validators.pattern(/^\d+\s[A-Z][a-z]+\s[A-Z][a-z]+\.$/)
    ]),
    city: new FormControl('Townsville', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z]+$/)
    ]),
    state: new FormControl('OH - Ohio', Validators.required),
    country: new FormControl('US - United States', Validators.required),
    zip: new FormControl('12345-6789', [
        Validators.required,
        Validators.pattern(/^\d{5}-\d{4}$/)
      ])
});
