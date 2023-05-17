import { Injectable } from '@angular/core';
import { Carta } from './carta';
import { Jugador } from './jugador';

@Injectable({
  providedIn: 'root'
})
export class BancaService {
  constructor() {}

  RestablecerBaraja(): Carta[]{
    let cartasOrdenadas: Carta[] = [];
    let cartasBarajadas: Carta[] = [];
    let nuevoPalo: string = "";
    for (var i = 0; i < 4; i++){
      switch (i){
        case 0:
          nuevoPalo = "oro";
          break;
        case 1:
          nuevoPalo = "copa";
          break;
        case 2:
          nuevoPalo = "espada";
          break;
        case 3:
          nuevoPalo = "basto";
          break;
      }
      for (var j = 1; j <= 12; j++){
        if (j == 8) j = 10;
        let nuevaCarta: Carta = {
          palo: nuevoPalo,
          numero: j.toString(),
          valor: j <= 7 ? j : 0.5,
          img: "assets/images/" + nuevoPalo + j.toString() +".png",
          bocaArriba: true
        };
        cartasOrdenadas.push(nuevaCarta);
      }
    }
    while (cartasOrdenadas.length != 0){
      let indiceAleatorio: number = Math.floor(Math.random() * cartasOrdenadas.length)
      cartasBarajadas.push(cartasOrdenadas[indiceAleatorio]);
      cartasOrdenadas.splice(indiceAleatorio, 1);
    }
    return cartasBarajadas;
  }
}
