import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hiddenPassword: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  hide(): boolean {
    return this.hiddenPassword = !this.hiddenPassword;
  }

  goInicio() {
    this.router.navigate([''], { skipLocationChange: true });
  }

  goCarrinho() {
    this.router.navigate(['/carrinho'], { skipLocationChange: true });
  }
}