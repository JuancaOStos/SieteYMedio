import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio-elegir/inicio-elegir.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { InicioJugarComponent } from './inicio-jugar/inicio-jugar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    ResultadosComponent,
    InicioJugarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
