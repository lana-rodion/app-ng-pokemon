"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var list_pokemon_component_1 = require("./list-pokemon.component");
var detail_pokemon_component_1 = require("./detail-pokemon.component");
var edit_pokemon_component_1 = require("./edit-pokemon.component");
var auth_guard_service_1 = require("../auth-guard.service");
// les routes du module Pokémon
var pokemonsRoutes = [
    {
        path: 'pokemon',
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: 'all', component: list_pokemon_component_1.ListPokemonComponent },
            { path: 'edit/:id', component: edit_pokemon_component_1.EditPokemonComponent },
            { path: ':id', component: detail_pokemon_component_1.DetailPokemonComponent }
        ]
    }
];
var PokemonRoutingModule = /** @class */ (function () {
    function PokemonRoutingModule() {
    }
    PokemonRoutingModule = __decorate([
        (0, core_1.NgModule)({
            imports: [
                router_1.RouterModule.forChild(pokemonsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], PokemonRoutingModule);
    return PokemonRoutingModule;
}());
exports.PokemonRoutingModule = PokemonRoutingModule;
/** NOTES :
 * On utilise dans le module racine app-routing.module.ts
 * la méthode global forRoot(param), elle est réservée au module racine
 * imports: [
        RouterModule.forRoot(const)
    ], ...
 * Pour les modules fils on utilise la méthode de la classe RouterModule
 * forChild(const) qui permet d'enregistrer
 * des routes additionnelles par rapport au module racine :
 * imports: [
        RouterModule.forChild(pokemonsRoutes)
    ], ...
*/ 
//# sourceMappingURL=pokemons-routing.module.js.map