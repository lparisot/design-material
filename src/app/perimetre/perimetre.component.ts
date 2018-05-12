import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perimetre',
  templateUrl: './perimetre.component.html',
  styleUrls: ['./perimetre.component.css']
})
export class PerimetreComponent implements OnInit {
  @Input() data;

  cols = 2;
  rows = 2;
  rowHeight = '2:1';
  edis = new Array(this.cols*this.rows);
  panel = {title: 'mon titre', description: 'description'};

  constructor() { }

  ngOnInit() {
  }

}
