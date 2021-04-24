import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tokenFake: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTkwMTUwMjgsImV4cCI6MTY1MDU1MTAyOH0.VgCF4qfXgN_l73TaaYuYJJLpqTCm3ImKBIRSWhiP09M";
  faQuoteLeft = faQuoteLeft;
  formGroup: FormGroup;
  private user: User = new User();
  profile: ProfileModel = new ProfileModel();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routes: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.authService.showMenuEmitter.emit(false);
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

    const userAuthenticaded = await this.authService.userAuthenticated(
      {
        email: this.user.email,
        password: this.user.password
      },
      this.tokenFake);

    if (userAuthenticaded) {
      this.authService.showMenuEmitter.emit(true);

      this.profile.userId = userAuthenticaded.user.id;
      this.profile.userEmail = userAuthenticaded.user.email;
      this.profile.userName = userAuthenticaded.user.name;
      this.profile.token = userAuthenticaded.token;
      this.profileService.save(this.profile);

      this.goToHome();
    }
  }

  goToHome() {
    this.routes.navigateByUrl('/inicio');
  }
}
