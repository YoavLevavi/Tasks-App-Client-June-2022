import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-data',
  templateUrl: './other-data.component.html',
  styleUrls: ['./other-data.component.css'],
})
export class OtherDataComponent implements OnInit {
  @Input()
  city: string = '';
  @Input()
  street: string = '';
  @Input()
  zipCode: string = '';

  constructor() {}

  ngOnInit(): void {}
}
