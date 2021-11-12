import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
//import { POKEMONS } from "./mock-pokemons";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

// @Injectable() signale à Angular que ce service
// peut avoir des autres dépendances
@Injectable()
export class PokemonsService {
  
  	constructor(private http: HttpClient) {}
	
  	private pokemonsUrl = "api/pokemons";

	private log(log: string) {
		console.info(log);
	}

	private handleError<T>(operation='operation', result?: T){ 
		return (error :any): Observable<T> => {
			console.log(error);
			console.log(`${operation} failed: ${error.message}`);
			
			return of(result as T);
		} 
	}

    // Retourne le tableau de tous les pokemons
    /* getPokemons(): Pokemon[] {
        return POKEMONS;
    } */

	/* getPokemons retourne Observable qui contient un tableau des Pokemons
	 * la méthode this.http.get retourne un Observable qui s'occupe 
	 * d'envoyer une requête Http de type GET sur la route this.pokemonsUrl 
	 */
	getPokemons(): Observable<Pokemon[]> {
    	return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      		tap((_) => this.log(`fetched pokemons`)),
      		catchError(this.handleError("getPokemons", []))
    	);
  	}

  	// Retourne le pokémon avec l'identifiant passé en paramètre
	getPokemon(id: number): Observable<Pokemon> {
		//let pokemons = this.getPokemons();
		const url = `${this.pokemonsUrl}/${id}`; // Syntaxe ES6

		/* for (let index = 0; index < pokemons.length; index++) {
			if (id === pokemons[index].id) {
				return pokemons[index];
			}
		} */
		
		return this.http.get<Pokemon>(url).pipe(
			tap(_ => this.log(`fetched pokemon id=${id}`)),
			catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
		);
	}

  	getPokemonTypes(): Array<string> {
		return ["Plante","Feu", "Eau", "Insecte", "Normal",
			"Electrik", "Poison", "Fée", "Vol", "Combat", "Psy",
		];
  	}
}
