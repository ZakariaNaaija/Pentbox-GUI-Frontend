import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-hasher',
  templateUrl: './hasher.component.html',
  styleUrls: ['./hasher.component.css']
})
export class HasherComponent implements OnInit {
  algorithms = ['md5',
    'sha1',
    'ripemd160',
    'sha256',
    'sha384',
    ];
  constructor(private securityService:SecurityService) { }

  ngOnInit(): void {
  }
  word:string;
  hashedWord:string;
  errorMessage;
  
  algorithm:string="Select Algorithm";
  hasher(){
  
    this.securityService.hash(this.word,this.algorithm).subscribe((hashedWord)=>{
      this.hashedWord=hashedWord.hash;

    },error => {this.errorMessage = error.message},);
    
  }
}
