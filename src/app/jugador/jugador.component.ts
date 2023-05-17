import { Component, Input } from '@angular/core';
import { Carta } from '../carta';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {
  

  @Input() cartaRecibida?: Carta;
  @Input() nombre?: string;
  @Input() banca?: boolean;
  @Input() suma?: string;
  esBanca?: string;

  patata?: string;

  ngOnChanges(): void {
    this.esBanca = this.banca ? "(Banca)" : "";
  }
}
