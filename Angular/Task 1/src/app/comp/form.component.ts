import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required,,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      DoB: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        pincode: ['']
      })
    });

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.registerForm.value);
  }

}
