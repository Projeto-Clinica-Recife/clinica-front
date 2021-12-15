import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenManager } from 'src/app/providers/token-manager/token-manager.service';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profile!: any;
  constructor(
    private tokenManager: TokenManager,
    private router: Router,
    private usersService: UsersService,
  ) {
    this.profile = this.usersService.get_profile();
  }

  public rota: string = '/home';
  public rotaConsulta: string = '/medico/consulta';
  public rotaEditarPerfil: string = '/medico/editar-medico';
  public rotaAgenda: string = '/agenda';
  public rotaFinanceiro: string = '/financeiro';
  activeInicial = 'active';
  activeFinanceiro = '';
  activeAgenda = '';
  activeEditar = '';

  ngOnInit(): void {
    if (this.profile) {
      switch (this.profile.type_user) {
        case 'admin':
          this.rota = 'admin/home';
          break;
        case 'reception':
          this.rota = '/home';
          break;
        case 'doctor':
          this.rota = 'medico/home-medico';
          break;
      }
    }
  }


  async logout() {
    this.tokenManager.remove();
  }
}
