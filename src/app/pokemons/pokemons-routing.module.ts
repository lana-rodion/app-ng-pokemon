import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { ListPokemonComponent }    from './list-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon.component';
  
// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent }
];
  
@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }

/**
 * On utilise dans le module racine app-routing.module.ts 
 * la méthode global forRoot(param), elle est réservée au module racine
 * imports: [
        RouterModule.forRoot(const)
    ], ...
 * Pour les modules fils on utilise la méthode de la classe RouterModule
 * forChild(const) qui permet d'enregistrer 
 * des routes additionnelles par rapport au module racine :
 * imports: [
        RouterModule.forChild(pokemonsRoutes)
    ], ...
*/