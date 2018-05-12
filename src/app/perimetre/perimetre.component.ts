import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perimetre',
  templateUrl: './perimetre.component.html',
  styleUrls: ['./perimetre.component.css']
})
export class PerimetreComponent implements OnInit {
  @Input() data;

  cols: number = 4;

  constructor() { }

  ngOnInit() {
  }

}
