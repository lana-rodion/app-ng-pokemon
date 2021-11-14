import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemons/detail-pokemon.component.html',
    styleUrls: ['./app/pokemons/detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
    // On supprime la liste car on utilisera le PokemonsService pour récupérer tous les pokemons
    //pokemons: Pokemon[] = null; //liste de tous les pokemons
    pokemon: Pokemon = null; // pokemon à afficher
    
    // private route: le paramètre pour récupérer depuis URL de composant
    // private router: pour rediriger vers un autre URL
    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private pokemonsService: PokemonsService) {}
  
    // void = cette méthode n'a pas d'une valeur de retour, elle renvoie rien
    ngOnInit(): void {
        // la propriété snapshot = permet de récupérer de façon synchronne
        // l'exécution du programme est bloquée tant qu'on n'a pas de "id" à afficher 
        let id = +this.route.snapshot.paramMap.get('id');
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);
    }

    delete(pokemon: Pokemon): void { 
        this.pokemonsService.deletePokemon(pokemon)
        .subscribe((_) => this.goBack());
    }
    
    // méthode goBack definit la rédirection vers URL ['/pokemons']
    // this.router.navigate(['/pokemons']);
    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }

    // méthode goEdit definit la rédirection vers URL ['/pokemons/edit/:id']
    goEdit(pokemon: Pokemon): void {
        let link = ['pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }
}