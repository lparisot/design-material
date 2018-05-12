import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {
  @Input() elements;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let group = {};
    this.elements.forEach(element => {
      group[element.field] = new FormControl(
        { value: element.value,
          disabled: false
        },
        [ element.required ? Validators.required : Validators.nullValidator,
          element.email ? Validators.email : Validators.nullValidator
        ]
      );
    });
    this.formGroup = this.fb.group(group);
  }

  getErrorMessage(formControl) {
    return formControl.hasError('required') ? 'Vous devez entrer une valeur' :
           formControl.hasError('email') ? 'Email invalide' :
           '';
  }

}
