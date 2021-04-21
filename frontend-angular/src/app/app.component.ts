import { Component } from '@angular/core';
import { AuthService } from './administrativo/services/auth.service';
import { ProfileService } from './shared/services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-thedailyscripture';
  
  showMenu: boolean;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService) {
    
      const profile = this.profileService.get();
      this.showMenu = profile?.token != null;
  }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      eventEmitterValue => this.showMenu = eventEmitterValue
    );
  }
}
