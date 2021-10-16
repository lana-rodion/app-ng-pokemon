import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
	selector: 'pokemon-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit { 

    private pokemons: Pokemon[] = null;
    //Angular récupére la valeur de title et l'injecte dans app.component.html <h1>{{ title }}</h1>
    private title: string = 'Pokémons';
    age = 20;
    //la méthode ngOnInit, et permet de définir un comportement 
    //lorsque le composant est initialisé
    ngOnInit() {
        this.pokemons = POKEMONS; //constante from './mock-pokemons';
    }

    //parametre est un objet pokemon de type Pokemon
    selectPokemon(pokemon: Pokemon) {
        alert("Vous avez cliqué sur " + pokemon.name);
    }
}
