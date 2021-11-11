import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';


/* A NE PAS FAIRE : ne pas instancier une nouvelle instance d'un Service dans un composant
 * par ex., let pokemonsService = new PokemonsService();
 * Problème 1 : Le composant doit savoir comment créer le Service
 * Problème 2 : Si le Service était modifié, il fallait retrouver tous les composants qui ont utilisé ce Service
 * Problème 3 : on ne pourrait pas partager avec des autres composant cette instance unique du Service
*/
/* ===================== */
/* Injecter un service dans le constructor : 
 * Constructor-injection pattern.
 * Ajouter dans un constructor une propriété "private" --> private pokemonsService: PokemonsService. 
 * Ça injecte dans le Component une instance de PokemonsService.
 * Cette instance est disponible sous forme de la propriété privée "private pokemonsService",
 * avec this.pokemonsService on peut accéder aux méthode du PokemonsService.
 * Cette instance est unique à travers toute l'application.
 * Si on injecte ce Service dans un autre composant, ça sera la même instance.
 * Le fait que l'instance du Service est unique permet d'utiliser le Service comme un stockage temporaire des données.
*/
/* ===================== */
/* Ajouter un fournisseur du service avec l'annontation "providers: []" 
*/
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null;

    constructor(private router: Router, private pokemonsService: PokemonsService) { }
  
    ngOnInit(): void {
        this.pokemons = POKEMONS;
        //this.pokemons = this.pokemonsService.getPokemons();
    }
  
    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
  
}