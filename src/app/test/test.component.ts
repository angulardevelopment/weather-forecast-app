import { Component, Input } from '@angular/core';
import {Input as RouterInput} from '@angular/core'

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
// @Input() testId!: string;
// @Input() permission!: string;
// @Input() user!: string;

@RouterInput() testId!: string;

constructor() {
  // You can initialize any properties or services here if needed
  console.log('TestComponent initialized with testId:', this.testId);

  }

ngOnInit() {
  console.log('TestComponent initialized with testId:', this.testId);
  // You can access the permission and user inputs similarly if needed
  // console.log('Permission:', this.permission);
  // console.log('User:', this.user);
}
}
