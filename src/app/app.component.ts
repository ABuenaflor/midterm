import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName : string ="";
  lastName : string ="";
  age: number = 0;
  listofNames : Array < any > ;
  
  constructor ( ) {
    this.listofNames =[
      { firstName : ' Joey ' , lastName : ' Salceda ' , age : 60 } ,
      { firstName : ' Al ' , lastName : ' Bichara ' , age : 54 } ,
    ] ;
 }
 
 addname(){
  this.listofNames.push({firstName: this.firstName,lastName: this.lastName,age: this.age,})
  console.log(this.listofNames);
  
}
deletename(x: number){
  this.listofNames.splice(x,1);

}
    edit(item: any) {
      debugger;
      this.listofNames.forEach(element=>{
        element.isEdit = false;
      })
      item.isEdit=true; 
      
    }

}
  