import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;
  formGroup: FormGroup;
  private user: User = new User();
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]]
    });
  }

  async handleLogin() {
    const form = this.formGroup.value;
    this.user.email = form.email;
    this.user.password = form.password;

    const userAuthenticaded = await this.authService.userAuthenticated(this.user);

    if(userAuthenticaded) {
      this.goToHome();
    }
  }

  goToHome() {

  }
}
