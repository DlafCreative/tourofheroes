import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
          <a routerLink="/dashboard">Dashboard</a>
          <a routerLink="/heroes">Voir les Héros</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['app/heroes.component.css']
})
export class AppComponent {
    title: string;
}