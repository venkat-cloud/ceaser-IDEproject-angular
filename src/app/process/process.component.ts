import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  public key = 1
  public plainText = "ceaser"
  public cipherText : String

  constructor() { }

  ngOnInit(): void {
    this.cipherText = this.giveString(this.plainText , this.key)
  }

  giveString(text : string, nkey : number)
  {
    let k = 0
    let res : string = ''
    for( let i = 0 ; i < text.length ; i++ )
    {
      k = ((text.charCodeAt(i) - 97 + nkey)%26)+97
      res += String.fromCharCode(k) 
    }
    return res
  }
  crypt()
  {
    let nkey : number;
    if(this.plainText.length === 0)
    {
      nkey = -1*this.key
      nkey  = (nkey+26) % 26
      this.plainText = this.giveString(this.cipherText.toLowerCase(),nkey)
    }
    else
    {
      nkey  = (this.key+26) % 26
      this.cipherText = this.giveString(this.plainText.toLowerCase() , nkey)
    }
  }
}
