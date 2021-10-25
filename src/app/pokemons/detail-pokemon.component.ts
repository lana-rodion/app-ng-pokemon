import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
  
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemons/detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null; //liste de tous les pokemons
    pokemon: Pokemon = null; // pokemon à afficher
    
    // private route: le paramètre pour récupérer depuis URL de composant
    // private router: pour rediriger vers un autre URL
    constructor(private route: ActivatedRoute, private router: Router) {}
  
    // void = cette méthode n'a pas d'une valeur de retour, elle renvoie rien
    ngOnInit(): void {
        //on récupére tous les pokemons d'application
        this.pokemons = POKEMONS;
        
        //récupére tous les paramètres de la route associé au composant
        //la propriété snapshot = permet de récupérer de façon synchronne
        // l'exécution du programme est bloquée tant qu'on n'a pas de "id" à afficher 
        let id = +this.route.snapshot.paramMap.get('id');

        // boucle for pour trouver le pokemon selon son "id" défini dans let id :
        // let id = +this.route.snapshot.paramMap.get('id');
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    }
    
    // méthode goBack definit la rédirection vers URL ['/pokemons']
    // this.router.navigate(['/pokemons']);
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
}