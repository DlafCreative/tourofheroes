/**
 * Created by TINO-DEV on 15/08/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from './hero';

@Component({
    selector:       'app-hero-detail',
    templateUrl:    'app/hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor(private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        console.log(this.activatedRoute.params)
        this.activatedRoute.params.forEach( (params: Params) => {
            let id = +params['id'];

            // Retrive hero details
        });
    }

}