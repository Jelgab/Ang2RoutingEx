//our root app component
import {Component} from '@angular/core'


@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="/socios">Socios</a>
      <a routerLink="/landing">LandingPage</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class App {

  
}
