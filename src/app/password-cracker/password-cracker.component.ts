import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-password-cracker',
  templateUrl: './password-cracker.component.html',
  styleUrls: ['./password-cracker.component.css']
})
export class PasswordCrackerComponent implements OnInit {

  types = ['dictionary',
  'bruteforce',
  'hybrid'];
  algorithms = ['md5',
  'sha1',
  'ripemd160',
  'sha256',
  'sha384',
  ];
  constructor(private securityService:SecurityService) { }

ngOnInit(): void {
}
algorithm:string="Select Algorithm";
password:string;
crackedPassword:string;
attackChoice:string="Select Attack Type";
notfound;
loading=false;
cracker(){
  this.loading=true;
  this.notfound=false;
  this.securityService.cracker(this.password,this.attackChoice,this.algorithm).subscribe((crackedPassword)=>{
    if(crackedPassword.password=="Password Not Found"){
      this.notfound=true;
    }
    else{
      this.notfound=false;
      this.crackedPassword=crackedPassword.password;
    }
    this.loading=false;
  });
  
}

}
