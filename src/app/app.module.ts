/**
 * Created by TINO-DEV on 15/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    declarations:   [
        AppComponent,
        HeroDetailComponent
    ],
    imports:        [
        BrowserModule,
        // FormsModule
        FormsModule
    ],
    bootstrap:      [AppComponent]
})
export class AppModule{}