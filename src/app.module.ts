import { NgModule } from '@angular/core';
import { App }   from './app';
import { BrowserModule } from '@angular/platform-browser';
// Importamos la configuración de rutas que hemos creado anteriormente
import { routing } from './app.routing';

// Importamos los componentes
import { SociosComponent } from './socios.component';
import { Landing } from './landing';

@NgModule({
  imports:      [ 
    routing, 
    BrowserModule
  ],
  declarations: [ 
    App,
    SociosComponent,
    Landing
  ],
  bootstrap:[ App ]
})

export class AppModule {}