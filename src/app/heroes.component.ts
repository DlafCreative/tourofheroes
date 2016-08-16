import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {

  title = 'La famille Nuon-Thebault';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroesSlowly().then( (heroes) => { this.heroes = heroes });
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}