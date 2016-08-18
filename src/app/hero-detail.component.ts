/**
 * Created by TINO-DEV on 15/08/2016.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector:       'app-hero-detail',
    templateUrl:    'app/hero-detail.component.html',
    styleUrls:      ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(
        private activatedRoute: ActivatedRoute,
        private heroService: HeroService ) {

    }

    ngOnInit(){
        this.activatedRoute.params.forEach( (params: Params) => {
            let id = +params['id'];
            // Retrieve hero details
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack() {
        window.history.back();
    }

}