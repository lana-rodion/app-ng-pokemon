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
    private title: string = 'Pokémons'
    private value: string = '';

    //la méthode ngOnInit, et permet de définir un comportement 
    //lorsque le composant est initialisé
    ngOnInit() {
        this.pokemons = POKEMONS; //constante from './mock-pokemons';
    }

    onClick() {
        console.log("Bouton a été cliqué !");
    }

    /* onKey(event: KeyboardEvent) {
        this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
    } */
    //Sans event, mais avec une variable référencée
    onKey(value: string) {
        this.value = 'Bonjour ' + value;
    }

    //parametre est un objet pokemon de type Pokemon
    selectPokemon(pokemon: Pokemon) {
        alert("Vous avez cliqué sur " + pokemon.name);
    }

    
}
