import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
  
import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

// Chaque Module a un décorateur @NgModule
// imports: un tableau des classes importées d'autres modules et
// nécessaires au fonctionnement du Module
// declaration: un tableau des classes de vues ou templates : Component, Directive, Pipe
  
@NgModule({
    imports: [
        BrowserModule,
        PokemonsModule, // L'odre de chargement des modules est très important
        AppRoutingModule // pour l'ordre de déclaration des routes !
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }