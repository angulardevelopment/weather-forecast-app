import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {
// Todo add qr code Generator    also


// A QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or 2D barcode). It was first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that includes information about the item to which it is attached.
// Best site to create QR code of any link/Text etc.
// www.the-qrcode-generator.com

  foods2: Food[] = [
    { value: 'svg', viewValue: 'svg' },
    { value: 'img', viewValue: 'img' },
    { value: 'canvas', viewValue: 'canvas' },
  ];
  elementType = 'svg';
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#000000';
  width = 2;
  height = 100;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 10;
  marginLeft = 10;
  marginRight = 10;
  get values(): string[] {
    return this.value.split('\n');
  }
  codeList: string[] = [
    '', 'CODE128',
    'CODE128A', 'CODE128B', 'CODE128C',
    'UPC', 'EAN8', 'EAN5', 'EAN2',
    'CODE39',
    'ITF14',
    'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110',
    'pharmacode',
    'codabar'
  ];

  constructor() { }

  ngOnInit() {
  }

}
export interface Food {
  value: string;
  viewValue: string;
}
