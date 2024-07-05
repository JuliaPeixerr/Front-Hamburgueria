import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from "../../core/services/cliente";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private service: ClienteService,
    private notification: ToastrService
  ) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.usuario, this.senha);
    this.service.login({
      usuario: this.usuario,
      senha: this.senha
    }).subscribe(() => {
      this.notification.success('Usuário logado com sucesso');
      this.navigateHome();
    }, () => {
      this.notification.error('Erro ao logar, por favor tente novamente');
    });
  }

  private navigateHome() {
    this.router.navigate(['home'], { skipLocationChange: true });
  }
}