import { Carta } from "./carta"

export interface Jugador {
    nombre: string,
    //dinero: number,
    suma: number,
    turnoTerminado: boolean,
    banca: boolean,
    mano: Carta[]
}
