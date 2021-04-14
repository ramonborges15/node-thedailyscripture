import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { UserCreateDTO } from '../../dtos/UserCreateDTO';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.scss']
})
export class LoginCreateComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  formGroup: FormGroup;
  userCreateDTO: UserCreateDTO = new UserCreateDTO();

  constructor(
    private formBuilder: FormBuilder,
    private routes: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: [this.userCreateDTO.name, Validators.required],
      email: [this.userCreateDTO.email, [Validators.required, Validators.email]],
      password: [this.userCreateDTO.password, [Validators.required, Validators.minLength(8)]]
    });
  }

  handleSubmit() {
    this.formBindingFields();

    if(!this.formGroup.valid) {
      return;
    }

    this.userService.create(this.userCreateDTO);
    this.goToLogin();
  }

  goToLogin() {
    return this.routes.navigateByUrl("/login")
  }

  formBindingFields() {
    const form = this.formGroup.value;
    
    this.userCreateDTO.name = form.name;
    this.userCreateDTO.email = form.email;
    this.userCreateDTO.password = form.password;
  }

}
