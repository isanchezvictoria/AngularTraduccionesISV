import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private nombre: string = 'Iván Sánchez';

  public mensaje: string;

  public deportes: Array<string>;

  constructor(public translate: TranslateService) {

    this.translate.get('Home.RealizadoPor').subscribe(data => this.mensaje = data + this.nombre);


  }

  ngOnInit(): void {
  }

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
    this.translate.get('Home.RealizadoPor').subscribe(data => this.mensaje = data + ' Iván Sánchez Victoria')

  }
}
