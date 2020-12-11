import { Component, OnInit } from '@angular/core';
import {SecurityService} from '../services/security.service'
@Component({
  selector: 'app-encoder-decoder',
  templateUrl: './encoder-decoder.component.html',
  styleUrls: ['./encoder-decoder.component.css']
})
export class EncoderDecoderComponent implements OnInit {

  constructor(private securityService:SecurityService) { }

  ngOnInit(): void {
    
  }
  word:string;
  encodedWord:string;
  decodedWord:string;
  errorMessage:string;
  loading;
  encoder(){
    this.loading=true;
    this.securityService.encoder(this.word).subscribe((encodedWord)=>{
      this.decodedWord = null;
      this.encodedWord=encodedWord.result;
      this.errorMessage="";
      this.loading=false;
    },
    (error) => {this.errorMessage = error.statusText});
  }

  decoder(){
    this.loading=true;
    this.securityService.decoder(this.word).subscribe((decodedWord)=>{
      this.encodedWord = null;
      this.decodedWord=decodedWord.result;
      console.log(this.decodedWord)
      this.errorMessage="";
      if(this.decodedWord == null){
        this.errorMessage = "String can't be decoded"
      }

      this.loading=false;
    },
    (error) => {this.errorMessage = error.statusText});
  }
}
