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
exports.PokemonSearchComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var pokemons_service_1 = require("./pokemons.service");
var PokemonSearchComponent = /** @class */ (function () {
    function PokemonSearchComponent(pokemonsService, router) {
        this.pokemonsService = pokemonsService;
        this.router = router;
        // class Subject appartient à RxJS, il permet de stocker des recherches successifs
        // dans un tableau de strings sous la forme d'un Observable avec une notion de décalage dans le temps
        // class Subject hérite de la class Observable, donc searchTerms = Observable
        this.searchTerms = new rxjs_1.Subject();
    }
    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    PokemonSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PokemonSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemons$ = this.searchTerms.pipe(
        // attendre 300ms de pause entre chaque requête
        (0, operators_1.debounceTime)(300), 
        // ignorer la recherche en cours si c'est la même que la précédente
        (0, operators_1.distinctUntilChanged)(), 
        // pour chaque terme de recherche
        // on renvoie la liste des Pokémons correspondants à cette recherche.
        (0, operators_1.switchMap)(function (term) { return _this.pokemonsService.searchPokemons(term); }));
    };
    PokemonSearchComponent.prototype.gotoDetail = function (pokemon) {
        var link = ["/pokemon", pokemon.id];
        this.router.navigate(link);
    };
    PokemonSearchComponent = __decorate([
        (0, core_1.Component)({
            selector: 'pokemon-search',
            templateUrl: './app/pokemons/search-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [pokemons_service_1.PokemonsService,
            router_1.Router])
    ], PokemonSearchComponent);
    return PokemonSearchComponent;
}());
exports.PokemonSearchComponent = PokemonSearchComponent;
//# sourceMappingURL=search-pokemon.component.js.map