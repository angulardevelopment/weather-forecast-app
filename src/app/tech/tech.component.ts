import { Component, OnInit } from '@angular/core';
import * as crypto from 'crypto-js';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})


export class TechComponent implements OnInit {

  constructor() { }
  foods: Food[] = [
    { value: 'compress', viewValue: 'compress' },
    { value: 'decompress', viewValue: 'decompress' },
  ];

  foods2: Food[] = [
    { value: 'svg', viewValue: 'svg' },
    { value: 'img', viewValue: 'img' },
    { value: 'canvas', viewValue: 'canvas' },
  ];
  someText;
  updatedText;
  phrase;
  findPhrase;
  replacePhrase;
  finalPhrase;
  textData;
  finalObj;
  exampleString;
  finalop;
  sampEntries = '';
  finalValue;
  texttofind;
  shuffledata;
  finalShuffling;
  textEntriesString;
  noofSTr;
  lenStr;
  finalStr = '';
  noFrom;
  noTo;
  entries;
  noOutput = '';
  myString;
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

  ngOnInit() {
  }


  copyData() {
    const copyText = (<HTMLInputElement>document.getElementById('myInput'));
    copyText.select();
    document.execCommand('copy');

    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copied: ' + copyText.value;
  }

  outFunc() {
    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = 'Copy to clipboard';
  }


  removeLinebreaks() {
    this.updatedText = this.someText.replace(/(\r\n\t|\n|\r\t)/gm, ' ');
  }


  replaceText() {
    this.finalPhrase = this.phrase.split(this.findPhrase).join(this.replacePhrase);
  }


  WordsStatistics() {
    const uniqueWords = this.textData.split(/\s+/).sort().filter(function (v, i, o) { return v !== o[i - 1]; });
    const text = this.textData,
      chars = text.length,
      words = text.split(/\b\S+\b/g).length - 1,
      lines = text.split('\n').length,
      sentences = text.split('.').length;
    const uniqueChars = this.textData.split('').filter(function (item, i, ar) { return ar.indexOf(item) === i; }).join('');

    this.finalObj = 'chars: ' + chars + ',' + ' words: ' + words + ',' + ' lines: ' + lines + ',' + ' sentences: ' + sentences + ','
      + ' unique chars: ' + uniqueChars;
  }
  // <!-- Array
  // (
  //     [0] => xsx
  // )

  // Length: 3 characters
  // Length witout white-space: 3 characters
  // Lines: 1
  // Words: 1
  // Sentences: 1
  // Unique words: 1
  // Unique words(%): 100%
  // Length of shortest word: 3 characters
  // Length of longest word: 3 characters
  // Avg. word length: 3
  // Avg. words per line: 1
  // Avg. words per sentence: 1

  countChars() {
    const stringBase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
     'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const countObject = {};

    function characterCount(word, character) {
      let count = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === character) {
          count++;
        }
      }
      return count;
    }

    for (let i = 0, l = stringBase.length; i < l; i++) {
      const currentChar = stringBase[i];
      countObject[currentChar] = characterCount(this.exampleString, currentChar);
    }
    this.finalop = JSON.stringify(countObject);
    console.log(countObject);
  }


  textEntries() {
    function find_occurences(str, char_to_count) {
      return str.split(char_to_count).length - 1;
    }
    this.finalValue = find_occurences(this.sampEntries, this.texttofind);
    // or
    // function count(string,char) {
    //   var re = new RegExp(char,"gi");
    //   return string.match(re).length;
    //  }

    //  var str34 = 'I will practice survival skills';
    //  console.log(count(str34,'i'),'df');
  }


  shufflWords() {
    function shuffelWord(word) {
      word = word.split('');

      // Remove the first and the last letter
      const first = word.shift();
      const last = word.pop();

      // Shuffle the remaining letters
      for (let i = word.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [word[i], word[j]] = [word[j], word[i]];
      }

      // Append and return
      return first + word.join('') + last;
    }

    this.finalShuffling = shuffelWord(this.shuffledata);
    console.log(this.finalShuffling, 'cs');

  }


  generateText() {
    let text = '';
    for (let j = 0; j < this.noofSTr; j++) {
      text = '';
      for (let i = 0; i < this.lenStr; i++) {
        text += this.textEntriesString.charAt(Math.floor(Math.random() * this.textEntriesString.length));
      }
      this.finalStr = this.finalStr + text + ',';
    }
  }


  randomNo() {
    for (let i = 0; i < this.entries; i++) {
      const c = Math.round((Math.random()) * (parseInt(this.noTo, 10) - parseInt(this.noFrom, 10) + 1) +
       parseInt(this.noFrom, 10));
      // if(arr.indexOf(c) === -1) arr.push(r);

      this.noOutput = this.noOutput + c + ',';
    }

  }


  convertData() {
    const myString = 'https://www.titanesmedellin.com/';
    const myPassword = 'myPassword';


    // PROCESS
    const encrypted = crypto.AES.encrypt(myString, myPassword);
    // var decrypted = crypto.AES.decrypt(encrypted, myPassword);
    // var encrypted = crypto.AES.encrypt("Message", "Secret Passphrase");
    // U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

    const decrypted = crypto.AES.decrypt(encrypted, 'Secret Passphrase');
    console.log(encrypted.toString());
    console.log(decrypted.toString());

    console.log(decrypted.toString(crypto.enc.Utf8, 'vg'));
  }




  //   project for testing-
  // generate sample text file & text generator
  // input field- 1mb
  // output - generate .txt file havinf content of 1 mb

  demo() {

    function generate_random_data1(size) {
      const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
      const len = chars.length;
      const random_data = [];

      while (size--) {
        random_data.push(chars[Math.random() * len || 0]);
      }

      return random_data.join('');
    }
    const blob = new Blob([generate_random_data1(parseInt('10', 10) * 1024 * 1024)], { type: 'text/plain' });
    saveAs(blob, 'log.txt');
  }


}

export interface Food {
  value: string;
  viewValue: string;
}
