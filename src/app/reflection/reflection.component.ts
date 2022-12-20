import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.css']
})
export class ReflectionComponent implements OnInit {
  isShown1: boolean = false ;
  isShown2:boolean = false;
  isShown3:boolean=false;
  isShown:boolean=false;
  isShown4:boolean=false;
  isShown5:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(event:any,button_num) {
    
    console.log(button_num);


    //console.log('in toggle');
    if(button_num==1){
      this.isShown1 = ! this.isShown1;
      this.isShown2 = false;
      this.isShown3 = false;
      this.isShown4 = false;
      this.isShown5 = false;
    }else if(button_num==2){
      this.isShown2 = ! this.isShown2;
      this.isShown1 = false;
      this.isShown3 = false;
      this.isShown4 = false;
      this.isShown5 = false;
    }else if(button_num==3){
      this.isShown3 = ! this.isShown3;
      this.isShown1 = false;
      this.isShown2 = false;
      this.isShown4 = false;
      this.isShown5 = false;
    }else if(button_num==4){
      this.isShown4 = ! this.isShown4;
      this.isShown1 = false;
      this.isShown2 = false;
      this.isShown3 = false;
      this.isShown5 = false;
    }else if(button_num==5){
      this.isShown5 = ! this.isShown5;
      this.isShown1 = false;
      this.isShown2 = false;
      this.isShown3 = false;
      this.isShown4 = false;
    }
    
    console.log('shown1: '+this.isShown1);
    console.log('shown2: '+this.isShown2);
    console.log('shown3: '+this.isShown3);

    }

}
