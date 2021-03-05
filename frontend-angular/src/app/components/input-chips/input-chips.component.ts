import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-chips',
  templateUrl: './input-chips.component.html',
  styleUrls: ['./input-chips.component.scss']
})
export class InputChipsComponent implements OnInit {

  constructor() { }

  @Input()
  labels: string[] = [];


  ngOnInit(): void {
  }


}
