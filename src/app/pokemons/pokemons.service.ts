import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

// @Injectable() signale à Angular que ce service 
// peut avoir des autres dépendances
@Injectable() 
export class PokemonsService {

    // Retourne le tableau de tous les pokemons
    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon {
        let pokemons = this.getPokemons();
        
        for(let index = 0; index < pokemons.length; index++) {
            if(id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }

    getPokemonTypes(): Array<string> { 
        return [ 
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy' 
        ]; 
    }
}