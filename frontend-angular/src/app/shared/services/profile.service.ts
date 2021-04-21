import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileModel } from '../models/profile.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private sessionService: SessionService,
    private router: Router) { }

  /**
   * Método de logout
   * Limpa as variáveis da sessão e redireciona o usuário para tela de login
   */
   logout() {
    this.sessionService.clear();
    this.router.navigate(['login']);
  }

  /**
   * Método para salvar as informações do profile na sessão
   */
  save(profile: ProfileModel) {
    this.sessionService.setItem('profile', profile);
  }

  /**
   * Método para recuperar as informações do usuário da sessão
   */
  get(): ProfileModel {
    const profile: ProfileModel = this.sessionService.getItem('profile');
    return profile;
  }

}
