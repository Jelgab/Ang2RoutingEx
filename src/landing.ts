import { Component } from '@angular/core';

@Component({
  selector: 'landing-page',
  template: `<h1>Landing page!</h1>
             <h4>The links on top of page are navigation links </h4>
             <h4>Below hyperlink is from your landing page:</h4><a routerLink="/socios">Socios</a>`

})

export class Landing {
  
  
}