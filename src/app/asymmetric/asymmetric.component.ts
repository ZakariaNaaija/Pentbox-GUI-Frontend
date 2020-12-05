import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asymmetric',
  templateUrl: './asymmetric.component.html',
  styleUrls: ['./asymmetric.component.css']
})
export class AsymmetricComponent implements OnInit {

  choice = 1;

  constructor() { }

  ngOnInit(): void {
  }

  choose(choice : number) {
    this.choice=choice
  }

}
