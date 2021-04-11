import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';



@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.scss']
})
export class LoginCreateComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  formGroup: FormGroup;
  userDTO: CreateUserDTO = new CreateUserDTO();

  constructor(private formBuilder: FormBuilder,
    private routes: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  submit() {
    this.formBindingFields();
  }

  formBindingFields() {
    const form = this.formGroup.value;
    
    this.userDTO.name = form.name;
    this.userDTO.email = form.email;
    this.userDTO.password = form.password;
  }

}
