import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edi',
  templateUrl: './edi.component.html',
  styleUrls: ['./edi.component.css']
})
export class EdiComponent implements OnInit {
  @Input() panel;
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
