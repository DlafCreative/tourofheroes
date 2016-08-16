/**
 * Created by TINO-DEV on 15/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
    declarations:   [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    imports:        [
        BrowserModule,
        // FormsModule
        FormsModule
    ],
    providers:      [
        HeroService
    ],
    bootstrap:      [AppComponent]
})
export class AppModule{}