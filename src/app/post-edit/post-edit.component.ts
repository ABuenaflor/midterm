import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  submit(){
    console.log(this.form);
  }
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title:new FormControl(null),
      description: new FormControl(null),
      imagePath: new FormControl(null),
    })
  }
  

}
