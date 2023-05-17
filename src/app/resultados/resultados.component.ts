import { Component } from '@angular/core';
import { ConnService } from '../conn.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  partidas: any;

  constructor(private conn: ConnService) { }

  ngOnInit(): void{
    this.conn.getPartidas();
    this.partidas = this.conn.partidas;
  }
}
