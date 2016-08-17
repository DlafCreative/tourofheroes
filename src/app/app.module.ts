/**
 * Created by TINO-DEV on 15/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Import Routes
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
    declarations:   [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    imports:        [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers:      [
        HeroService
    ],
    bootstrap:      [AppComponent]
})
export class AppModule{}