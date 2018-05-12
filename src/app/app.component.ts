import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    { field: 'objet', type: 'select', placeholder: 'Selectionner un objet', value: '',
      options: [
        { value: 'obj1', viewValue: 'objet 1'},
        { value: 'obj2', viewValue: 'objet 2'},
        { value: 'obj3', viewValue: 'objet 3'},
      ]
    },
    { field: 'name', type: 'input', placeholder: 'Votre nom', value: '', required: true },
    { field: 'email', type: 'input', placeholder: 'Votre email', value: '', required: true, email: true },
    { field: 'data', type: 'textarea', placeholder: 'Vos données', value: '' }
  ];
}
