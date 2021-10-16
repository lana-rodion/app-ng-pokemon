"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var mock_pokemons_1 = require("./mock-pokemons");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pokemons = null;
        //Angular récupére la valeur de title et l'injecte dans app.component.html <h1>{{ title }}</h1>
        this.title = 'Pokémons';
        this.value = '';
    }
    //la méthode ngOnInit, et permet de définir un comportement 
    //lorsque le composant est initialisé
    AppComponent.prototype.ngOnInit = function () {
        this.pokemons = mock_pokemons_1.POKEMONS; //constante from './mock-pokemons';
    };
    AppComponent.prototype.onClick = function () {
        console.log("Bouton a été cliqué !");
    };
    /* onKey(event: KeyboardEvent) {
        this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
    } */
    //Sans event, mais avec une variable référencée
    AppComponent.prototype.onKey = function (value) {
        this.value = 'Bonjour ' + value;
    };
    //parametre est un objet pokemon de type Pokemon
    AppComponent.prototype.selectPokemon = function (pokemon) {
        alert("Vous avez cliqué sur " + pokemon.name);
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'pokemon-app',
            templateUrl: './app/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map