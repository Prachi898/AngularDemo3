import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tval=false;
  rdoEvent={color:'Green'};
  mycolor={'color':'Green'};
  name:string=null;
  eid:string=null;
  password:string=null;
  city:string=null;
  country:string=null;
  userInputData="vaibhav";
  childdata;
  txt1=true;
  txt2=true;
  txt3=true;
 
  boxStyle={'color':'black','background-color':'darksalmon',width:"500px"
  ,'position':'relative'};
  
  onClickMe(event){
    this.tval=!this.tval;
  }
  changeColor(){
       this.mycolor.color='black';    
  }
 displayText(event){
  this.txt1 = false;
  }
 dispRegData(){
this.txt2 = false;
 }

 dispTextbox(){
  this.txt3=false;
 }
}


