import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/forkJoin';
import { forkJoin, of, interval, Observable } from 'rxjs'; 
 
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})

export class CurrencyComponent  {

  // http://free.currencyconverterapi.com/api/v5/convert?q=USD_EUR&compact=ultra

  // http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in 
  // ("USDEUR","USDGBP",  "USDJPY", "USDBGN", "USDDKK",
  //"USDHUF", "USDCZK", "USDPLN",  "USDSEK","USDCHF",
  //"USDISK","USDNOK","USDAUD", "USDCAD", "USDHKD", 
  // "USDKRW","USDNZD","USDSGD", "USDZAR","USDINR", "USDRON", "USDHRK","USDRUB",

// "USDLTL", "USDLVL","USDTRY",  "USDBRL", "USDCNY", "USDIDR", "USDILS",  "USDMXN",  "USDMYR", "USDPHP",  "USDTHB"

  // &env=store://datatables.org/alltableswithkeys
  constructor(private http: HttpClient) { }
 url="https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=a38cf2f2df2f04109f17";
  public requestDataFromMultipleSources(): Observable<any[]> {
    let response1 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response2 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_GBP&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response3 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_JPY&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response4 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_DKK&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response5 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_BGN&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response6 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_HUF&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response7 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_CZK&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response8 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_PLN&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response9 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_SEK&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response10 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_CHF&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response11 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_ISK&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response12 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_NOK&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response13 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response14 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_CAD&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response15 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_HKD&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response16 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_KRW&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response17 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_NZD&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response18 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_SGD&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response19 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_ZAR&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response20 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response21 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_RON&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response22 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_HRK&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    let response23 = this.http.get("https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=a38cf2f2df2f04109f17");
    return (forkJoin([response1, response2, response3,response4, response5, response6,response7, 
      response8, response9,response10, response11, response12,response13, response14,
       response15,response16, response17, response18,response19, response20, response21,
      response22, response23]));
  }

  public responseData1: any;
  public responseData2: any;
  public responseData3: any;
  public responseData4: any;
  public responseData5: any;
  public responseData6: any;
  public responseData7: any;
  public responseData8: any;
  public responseData9: any;
  public responseData10: any;
  public responseData11: any;
  public responseData12: any;
  public responseData13: any;
  public responseData14: any;
  public responseData15: any;
  public responseData16: any;
  public responseData17: any;
  public responseData18: any;
  public responseData19: any;
  public responseData20: any;
  public responseData21: any;
  public responseData22: any;
  public responseData23: any;
  public responseData24: any;

  ngOnInit(){
    this.requestDataFromMultipleSources().subscribe(responseList => {
      this.responseData1 = responseList[0];
      this.responseData2 = responseList[1];
      this.responseData3 = responseList[2];
      this.responseData4 = responseList[3];
      this.responseData5 = responseList[4];
      this.responseData6 = responseList[5];
      this.responseData7 = responseList[6];
      this.responseData8 = responseList[7];
      this.responseData9 = responseList[8];
      this.responseData10 = responseList[9];
      this.responseData11 = responseList[10];
      this.responseData12 = responseList[11];
      this.responseData13 = responseList[12];
      this.responseData14 = responseList[13];
      this.responseData15 = responseList[14];
      this.responseData16 = responseList[15];
      this.responseData17 = responseList[16];
      this.responseData18 = responseList[17];
      this.responseData19 = responseList[18];
      this.responseData20 = responseList[19];
      this.responseData21 = responseList[20];
      this.responseData22 = responseList[21];
      this.responseData23 = responseList[22];
  });


  
  }
   
  dollarChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
      this.euro=(parseFloat(tempValue)*this.responseData1.USD_EUR);      
      this.pound=(parseFloat(tempValue)* this.responseData2.USD_GBP)
      this.japanYen=(parseFloat(tempValue)*this.responseData3.USD_JPY);
      this.denKrone=(parseFloat(tempValue)* this.responseData4.USD_DKK);
      this.levBulgria=(parseFloat(tempValue)* this.responseData5.USD_BGN);  
      this.forintHungary=(parseFloat(tempValue)* this.responseData6.USD_HUF);
      this.czechRepublc=(parseFloat(tempValue)* this.responseData7.USD_CZK);    //or divide length by 1.609     
      this.poland=(parseFloat(tempValue)* this.responseData8.USD_PLN);
      this.swedan=(parseFloat(tempValue)* this.responseData9.USD_SEK);
      this.swiss=(parseFloat(tempValue)* this.responseData10.USD_CHF);
      this.icelnd=(parseFloat(tempValue)* this.responseData11.USD_ISK)
      this.norway=(parseFloat(tempValue)* this.responseData12.USD_NOK );
      this.australian=(parseFloat(tempValue)* this.responseData13.USD_AUD);
      this.canada=(parseFloat(tempValue)* this.responseData14.USD_CAD);  
      this.hongkong=(parseFloat(tempValue)* this.responseData15.USD_HKD);
      this.korean=(parseFloat(tempValue)* this.responseData16.USD_KRW);    //or divide length by 1.609     
      this.newzlnd=(parseFloat(tempValue)* this.responseData17.USD_NZD);
      this.singapore=(parseFloat(tempValue)* this.responseData18.USD_SGD);
      this.african=(parseFloat(tempValue)* this.responseData19.USD_ZAR);
      this.indian=(parseFloat(tempValue)* this.responseData20.USD_INR);    //or divide length by 1.609     
      this.romaniac=(parseFloat(tempValue)* this.responseData21.USD_RON);
      this.crotia=(parseFloat(tempValue)* this.responseData22.USD_HRK);
      this.russian=(parseFloat(tempValue)* this.responseData23.USD_RUB);
  }
 
  euroChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData1.USD_EUR);
  this.dollarChanged(this.dollar);
  }
  pondChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData2.USD_GBP);
    this.dollarChanged(this.dollar);
  }
  yenChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData3.USD_JPY);
    this.dollarChanged(this.dollar);
  }
  kroneChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData4.USD_DKK);
    this.dollarChanged(this.dollar);
  }
  bulgChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData5.USD_BGN);
    this.dollarChanged(this.dollar);
  }
  hungaryChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData6.USD_HUF);
    this.dollarChanged(this.dollar);
  }
  czechChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData7.USD_CZK);
    this.dollarChanged(this.dollar);
  }
  polandChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData8.USD_PLN);
    this.dollarChanged(this.dollar);
  }
  swedenChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData9.USD_SEK);
    this.dollarChanged(this.dollar);
  }
  swissChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData10.USD_CHF);
    this.dollarChanged(this.dollar);
  }
  icelndChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData11.USD_ISK);
    this.dollarChanged(this.dollar);
  }
  norwayChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.dollar=(parseFloat(tempValue)/this.responseData12.USD_NOK);
    this.dollarChanged(this.dollar);
  }
ausChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData13.USD_AUD);
  this.dollarChanged(this.dollar);
}
conadaChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData14.USD_CAD);
  this.dollarChanged(this.dollar);
}
hongChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData15.USD_HKD);
  this.dollarChanged(this.dollar);
}
koreanChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData16.USD_KRW);
  this.dollarChanged(this.dollar);
}
newzlndChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData17.USD_NZD);
  this.dollarChanged(this.dollar);

}
singChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData18.USD_SGD);
  this.dollarChanged(this.dollar);
}
africnChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData19.USD_ZAR);
  this.dollarChanged(this.dollar);
}
INDChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData20.USD_INR);
  this.dollarChanged(this.dollar);
}
romaniaChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData21.USD_RON);
  this.dollarChanged(this.dollar);
}
crotiaChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData22.USD_HRK);
  this.dollarChanged(this.dollar);
}
russianChanged(newvalue){
  let tempValue=newvalue==""?"0":newvalue;
  this.dollar=(parseFloat(tempValue)/this.responseData23.USD_RUB);
  this.dollarChanged(this.dollar);
}

 ELEMENT_DATA = [
  {position: 1, name: 'USD', symbol: '$'},
  {position: 2, name: 'EUR',  symbol: '€'},
  {position: 3, name: 'GBP', symbol: '£'},
  {position: 4, name: 'JPY', symbol: '¥'},
  {position: 5, name: 'DKK',  symbol: 'Kr.'},
  {position: 6, name: 'BGN',  symbol: 'Лв.'},
  {position: 1, name: 'HUF', symbol: 'Ft'},
  {position: 2, name: 'CZK',  symbol: 'Kč'},
  {position: 3, name: 'PLN', symbol: 'zł'},
  {position: 4, name: 'SEK', symbol: 'kr'},
  {position: 5, name: 'CHF',  symbol: 'Fr.'},
  {position: 6, name: 'ISK',  symbol: 'Íkr'},
  {position: 1, name: 'NOK', symbol: 'kr'},
  {position: 2, name: 'AUD',  symbol: '$'},
  {position: 3, name: 'CAD', symbol: '$'},
  {position: 4, name: 'HKD', symbol: '$'},
  {position: 5, name: 'KRW',  symbol: '₩'},
  {position: 6, name: 'NZD',  symbol: '$'},
  {position: 1, name: 'SGD', symbol: '$'},
  {position: 2, name: 'ZAR',  symbol: 'R'},
  {position: 3, name: 'INR', symbol: '₹'},
  {position: 4, name: 'RON', symbol: 'lei'},
  {position: 5, name: 'HRK',  symbol: 'kn'},
  {position: 6, name: 'RUB',  symbol: '₽'},
];




  dollar
  euro
  pound
  japanYen
  denKrone
  levBulgria
  forintHungary
  czechRepublc
  poland
  swedan
  swiss
  icelnd
  norway
australian
canada
hongkong
korean
newzlnd
singapore
african
indian
romaniac
crotia
russian


//   USD
//   EUR
//   GBP
//   JPY
//   DKK
//   BGN
//   HUF
//   CZK
//   PLN
//   SEK
//   CHF
//   ISK
//   NOK
//   AUD
//   CAD
//   HKD
//   KRW
//   NZD
//   SGD
//   ZAR
//   INR
// RON
// HRK
// RUB
}
