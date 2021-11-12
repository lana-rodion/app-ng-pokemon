"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPokemonComponent = void 0;
var core_1 = require("@angular/core");
//import { POKEMONS } from './mock-pokemons';
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service");
/* A NE PAS FAIRE : ne pas instancier une nouvelle instance d'un Service dans un composant
 * par ex., let pokemonsService = new PokemonsService();
 * Problème 1 : Le composant doit savoir comment créer le Service
 * Problème 2 : Si le Service était modifié, il fallait retrouver tous les composants qui ont utilisé ce Service
 * Problème 3 : on ne pourrait pas partager avec des autres composant cette instance unique du Service
*/
/* ===================== */
/* INJECTER UN SERVICE dans le constructor :
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
/* AJOUTER UN FOURNISSEUR du service avec l'annontation "providers: []"
 * providers: [] permet à Angular d'accéder à l'instance du PokemonsService
 * lorsqu'il instancie un nouveau composant de la liste des pokemons.
 * Le composant ListPokemonComponent peut utiliser le Service pour recupérer des pokemons
 * et chacun de ses composants fils aussi.
*/
var ListPokemonComponent = /** @class */ (function () {
    function ListPokemonComponent(router, pokemonsService) {
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemons = null;
    }
    // Update après mettre Observable dans PokemonService
    ListPokemonComponent.prototype.ngOnInit = function () {
        //this.pokemons = POKEMONS;
        // On fournit des données depuis le PokemonsService avec sa méthode getPokemons()
        this.getPokemons();
    };
    ListPokemonComponent.prototype.getPokemons = function () {
        var _this = this;
        // getPokemons() envoie un Observable, on subscribe à cet Observable
        this.pokemonsService.getPokemons()
            .subscribe(function (pokemons) { return _this.pokemons = pokemons; });
    };
    ListPokemonComponent.prototype.selectPokemon = function (pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    ListPokemonComponent = __decorate([
        (0, core_1.Component)({
            selector: 'list-pokemon',
            templateUrl: './app/pokemons/list-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            pokemons_service_1.PokemonsService])
    ], ListPokemonComponent);
    return ListPokemonComponent;
}());
exports.ListPokemonComponent = ListPokemonComponent;
//# sourceMappingURL=list-pokemon.component.js.map