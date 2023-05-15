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
  @Input() dinero?: number;
  @Input() banca?: boolean;
  @Input() mano: Carta[] = [];
  esBanca?: string;

  ngOnChanges(): void {
    if (this.cartaRecibida) this.mano.push(this.cartaRecibida);
    console.log(this.mano);
    this.esBanca = this.banca ? "(Banca)" : "";
  }
}
