import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

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

		const url = `${this.pokemonsUrl}/${id}`; // Syntaxe ES6
		return this.http.get<Pokemon>(url).pipe(
			tap(_ => this.log(`fetched pokemon id=${id}`)),
			catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
		);
	}

	updatePokemon(pokemon: Pokemon): Observable<Pokemon> { 
		// On déclare headers pour signaler que la requête sera au format JSON
		const httpOptions = { 
			headers: new HttpHeaders({'Content-Type': 'application/json'}) 
		};
		
		// La requête Http type PUT
		return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe( 
			tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
			catchError(this.handleError<any>('updatePokemon'))
		);
	}

	deletePokemon(pokemon : Pokemon): Observable<Pokemon> {
		const url = `${this.pokemonsUrl}/${pokemon.id}`;
		const httpOptions = {
		  	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		
		// Requête du type DELETE
		return this.http.delete<Pokemon>(url, httpOptions).pipe(
			tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
			catchError(this.handleError<Pokemon>('deletePokemon'))
		);
	}

	/* Dans la signature searchPokemons prend en paramètre term: string 
	 * qui est le "term" de la recherche rentrée par l'utilisateur 
	 * et renvoie Observable<Pokemon[]> contenant un flux des Pokemons
	*/
	searchPokemons(term: string): Observable<Pokemon[]> { 
		if (!term.trim()) {
			// Si le terme de recherche n'existe pas,
			// on renvoie un tableau vide sous la forme d’un Observable avec ‘of’.
			return of([]);
		}
		
		return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
			tap(_ => this.log(`found pokemons matching "${term}"`)),
			catchError(this.handleError<Pokemon[]>('searchPokemons', []))
		);
	}

  	getPokemonTypes(): Array<string> {
		return ["Plante","Feu", "Eau", "Insecte", "Normal",
			"Electrik", "Poison", "Fée", "Vol", "Combat", "Psy",
		];
  	}
}
