import { Component, OnInit } from '@angular/core';
// import the form builder class
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: any;

               //Inject the FormBuilder service
  constructor(private formBuilder:FormBuilder) { 
    this.loginForm = FormGroup<any>;
  }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
        lastName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)] ],
        email: ["", [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)] ]
      })
  }

  collectData(){
    console.log(this.loginForm.value);
  }
}
