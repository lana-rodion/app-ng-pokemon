import { NgModule }      from '@angular/core';
// On import le Service Title
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
  
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

// Chaque Module a un décorateur @NgModule
// imports: un tableau des classes importées d'autres modules et
// nécessaires au fonctionnement du Module
// declaration: un tableau des classes de vues ou templates : Component, Directive, Pipe
  
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
        PokemonsModule, // L'ordre de chargement des modules est très important
        LoginRoutingModule,
        AppRoutingModule // pour l'ordre de déclaration des routes !
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    providers: [
        Title // On fournit le Service Title
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }