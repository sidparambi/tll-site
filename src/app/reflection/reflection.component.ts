import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.css']
})
export class ReflectionComponent implements OnInit {
  isShown: boolean = false ;
  constructor() { }

  ngOnInit(): void {
  }

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}
