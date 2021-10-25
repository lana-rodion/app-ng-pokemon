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
exports.DetailPokemonComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mock_pokemons_1 = require("./mock-pokemons");
var DetailPokemonComponent = /** @class */ (function () {
    // private route: le paramètre pour récupérer depuis URL de composant
    // private router: pour rediriger vers un autre URL
    function DetailPokemonComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pokemons = null; //liste de tous les pokemons
        this.pokemon = null; // pokemon à afficher
    }
    // void = cette méthode n'a pas d'une valeur de retour, elle renvoie rien
    DetailPokemonComponent.prototype.ngOnInit = function () {
        //on récupére tous les pokemons d'application
        this.pokemons = mock_pokemons_1.POKEMONS;
        //récupére tous les paramètres de la route associé au composant
        //la propriété snapshot = permet de récupérer de façon synchronne
        // l'exécution du programme est bloquée tant qu'on n'a pas de "id" à afficher 
        var id = +this.route.snapshot.paramMap.get('id');
        // boucle for pour trouver le pokemon selon son "id" défini dans let id :
        // let id = +this.route.snapshot.paramMap.get('id');
        for (var i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    };
    // méthode goBack definit la rédirection vers URL ['/pokemons']
    // this.router.navigate(['/pokemons']);
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemons']);
    };
    DetailPokemonComponent = __decorate([
        (0, core_1.Component)({
            selector: 'detail-pokemon',
            templateUrl: './app/pokemons/detail-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map