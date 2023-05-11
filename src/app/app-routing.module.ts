import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioElegirComponent } from './inicio-elegir/inicio-elegir.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { InicioJugarComponent } from './inicio-jugar/inicio-jugar.component';

const routes: Routes = [
  { path: 'inicio-elegir', component: InicioElegirComponent },
  { path: 'inicio-jugar', component: InicioJugarComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'resultados', component: ResultadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
