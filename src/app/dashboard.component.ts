/**
 * Created by TINO-DEV on 18/08/2016.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService){}

    ngOnInit(){
        this.heroService.getHeroes().then( resolve => {
            this.heroes = resolve.slice(Math.floor(Math.random() * 3) + 1  , Math.floor(Math.random() * 6) + 4  );
        });
    }

    goToDetail(){}
}