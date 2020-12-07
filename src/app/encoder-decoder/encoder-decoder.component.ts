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
  encoder(){
    this.securityService.encoder(this.word).subscribe((encodedWord)=>{
      this.encodedWord=encodedWord.result;
      this.errorMessage="";
    },
    (error) => {this.errorMessage = error.statusText});
  }

  decoder(){
    this.securityService.decoder(this.word).subscribe((decodedWord)=>{
      this.encodedWord=decodedWord.result;
      this.errorMessage="";
    },
    (error) => {this.errorMessage = error.statusText});
  }
}
