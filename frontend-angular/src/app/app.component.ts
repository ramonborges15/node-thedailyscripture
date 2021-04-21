import { Component } from '@angular/core';
import { AuthService } from './administrativo/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-thedailyscripture';
  
  showMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      eventEmitterValue => this.showMenu = eventEmitterValue
    );
  }
}
