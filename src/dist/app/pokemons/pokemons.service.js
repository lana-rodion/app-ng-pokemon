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
//import { POKEMONS } from "./mock-pokemons";
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
    // Retourne le tableau de tous les pokemons
    /* getPokemons(): Pokemon[] {
        return POKEMONS;
    } */
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
        //let pokemons = this.getPokemons();
        var url = this.pokemonsUrl + "/" + id; // Syntaxe ES6
        /* for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        } */
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