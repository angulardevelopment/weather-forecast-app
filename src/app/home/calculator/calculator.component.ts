import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  result='';
  value: any;
  decimal: boolean;
  answer: number;
  total=[];
  clear: boolean;
  previous_operator: any;
  firstNo;
  secondNo;
  operatr;

  addToCalculation(value) {

    if (this.clear == true) {

      this.result = '';
      this.clear = false;
    }

    if (value == '.') {

      if (this.decimal == true) {
        return false;
      }

      this.decimal = true;

    }

    this.result += value;

  }

  clearResult(){
    this.result='';
    this.total=[];
    this.previous_operator='';
  }

  calculate(operator) {
    this.firstNo=this.result;
    this.total.push(this.result);
    this.result = '';

    if (this.total.length == 2) {
      var a = Number(this.total[0]);
      var b = Number(this.total[1]);

      if (this.previous_operator == '+') {
        var total = a + b;
      } else if (this.previous_operator == '-') {
        var total = a - b;
      } else if (this.previous_operator == '*') {
        var total = a * b;
      } else {
        var total = a / b;
      }
      var answer = total;

      this.total = [];
      this.total.push(answer);
      this.result = total.toString();
      this.clear = true;
    }
    else {
      this.clear = false;
    }

    this.decimal = false;
    this.previous_operator = operator;
  this.operatr=operator;
  }

  getTotal() {
    var a = Number(this.total[0]);

    var b = Number(this.result);
    this.secondNo=b;
    if (this.previous_operator == '+') {
      var total = a + b;
    } else if (this.previous_operator == '-') {
      var total = a - b;
    } else if (this.previous_operator == '*') {
      var total = a * b;
    } else {
      var total = a / b;
    }

    if (isNaN(total)) {
      return false;
    }

    this.result = total.toString();
    this.total = [];
    this.clear = true;
  }
}
