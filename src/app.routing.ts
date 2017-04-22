// Importar componentes y m�dulos para el routing 
import { Routes, RouterModule, ModuleWithProviders  } from '@angular/router';
 
// Componentes
import { SociosComponent } from './socios.component';
import { Landing } from './landing';
 
// Configuraci�n de las rutas
const appRoutes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: Landing },
  { path: 'socios', component: SociosComponent }
];
 
export const routing = RouterModule.forRoot(appRoutes);