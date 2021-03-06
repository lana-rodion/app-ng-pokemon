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
exports.PokemonsService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// @Injectable() signale à Angular que ce service
// peut avoir des autres dépendances
var PokemonsService = /** @class */ (function () {
    function PokemonsService(http) {
        this.http = http;
        this.pokemonsUrl = "api/pokemons";
    }
    PokemonsService.prototype.log = function (log) {
        console.info(log);
    };
    PokemonsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            console.log(operation + " failed: " + error.message);
            return (0, rxjs_1.of)(result);
        };
    };
    /* getPokemons retourne Observable qui contient un tableau des Pokemons
     * la méthode this.http.get retourne un Observable qui s'occupe
     * d'envoyer une requête Http de type GET sur la route this.pokemonsUrl
     */
    PokemonsService.prototype.getPokemons = function () {
        var _this = this;
        return this.http.get(this.pokemonsUrl).pipe((0, operators_1.tap)(function (_) { return _this.log("fetched pokemons"); }), (0, operators_1.catchError)(this.handleError("getPokemons", [])));
    };
    // Retourne le pokémon avec l'identifiant passé en paramètre
    PokemonsService.prototype.getPokemon = function (id) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + id; // Syntaxe ES6
        return this.http.get(url).pipe((0, operators_1.tap)(function (_) { return _this.log("fetched pokemon id=" + id); }), (0, operators_1.catchError)(this.handleError("getPokemon id=" + id)));
    };
    PokemonsService.prototype.updatePokemon = function (pokemon) {
        var _this = this;
        // On déclare headers pour signaler que la requête sera au format JSON
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        // La requête Http type PUT
        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe((0, operators_1.tap)(function (_) { return _this.log("updated pokemon id=" + pokemon.id); }), (0, operators_1.catchError)(this.handleError('updatePokemon')));
    };
    PokemonsService.prototype.deletePokemon = function (pokemon) {
        var _this = this;
        var url = this.pokemonsUrl + "/" + pokemon.id;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        // Requête du type DELETE
        return this.http.delete(url, httpOptions).pipe((0, operators_1.tap)(function (_) { return _this.log("deleted pokemon id=" + pokemon.id); }), (0, operators_1.catchError)(this.handleError('deletePokemon')));
    };
    /* Dans la signature searchPokemons prend en paramètre term: string
     * qui est le "term" de la recherche rentrée par l'utilisateur
     * et renvoie Observable<Pokemon[]> contenant un flux des Pokemons
    */
    PokemonsService.prototype.searchPokemons = function (term) {
        var _this = this;
        if (!term.trim()) {
            // Si le terme de recherche n'existe pas,
            // on renvoie un tableau vide sous la forme d’un Observable avec ‘of’.
            return (0, rxjs_1.of)([]);
        }
        return this.http.get("api/pokemons/?name=" + term).pipe((0, operators_1.tap)(function (_) { return _this.log("found pokemons matching \"" + term + "\""); }), (0, operators_1.catchError)(this.handleError('searchPokemons', [])));
    };
    PokemonsService.prototype.getPokemonTypes = function () {
        return ["Plante", "Feu", "Eau", "Insecte", "Normal",
            "Electrik", "Poison", "Fée", "Vol", "Combat", "Psy",
        ];
    };
    PokemonsService = __decorate([
        (0, core_1.Injectable)(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map