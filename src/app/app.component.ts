import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './project/core/services/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'loja-front';

  constructor(public service: ProdutoService) { }

  ngOnInit(): void {
  }
}
