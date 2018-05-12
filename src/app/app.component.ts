import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    {
      description: { title: 'premier', description: 'ma description 1' },
      cols: 2, rows: 2, color: 'lightpink',
      expanded: true,
      tabs: [
        {
          label: 'un',
          elements: [
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
          ]
        },
        {
          label: 'deux',
          elements: [
            { field: 'test', type: 'input', placeholder: 'Autre test', value: '' },
            { field: 'objet', type: 'select', placeholder: 'Selectionner un objet', value: '',
              required: true,
              options: [
                { value: 'list1', viewValue: 'liste 1'},
                { value: 'list2', viewValue: 'liste 2'},
                { value: 'list3', viewValue: 'liste 3'},
              ]
            },
          ]
        }
      ]
    },
    {
      description: { title: 'second', description: 'ma description 2' },
      cols: 2, rows: 2, color: 'lightblue',
      expanded: true,
      tabs: [
        {
          label: 'un',
          elements: [
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
          ]
        },
        {
          label: 'deux',
          elements: [
            { field: 'test', type: 'input', placeholder: 'Autre test', value: '' },
            { field: 'objet', type: 'select', placeholder: 'Selectionner un objet', value: '',
              required: true,
              options: [
                { value: 'list1', viewValue: 'liste 1'},
                { value: 'list2', viewValue: 'liste 2'},
                { value: 'list3', viewValue: 'liste 3'},
              ]
            },
            { field: 'startDate', type: 'date', placeholder: 'Entrer une date de début', value: '' },
            { field: 'endDate', type: 'date', placeholder: 'Entrer une date de fin', value: '' },
          ]
        }
      ]
    }
  ];
}
