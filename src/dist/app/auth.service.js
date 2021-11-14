"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService() {
        // L'utilisateur est-il connecté ? Par défaut, l'utilisateur n'est pas connecté = false
        this.isLoggedIn = false;
    }
    // Une méthode de connexion simule une connexion de l'API en retournant Observable
    AuthService.prototype.login = function (name, password) {
        var _this = this;
        // Faites votre appel à un service d'authentification si besoin ...
        var isLoggedIn = (name === "pikachu" && password === "pikachu");
        return (0, rxjs_1.of)(true).pipe((0, operators_1.delay)(1000), (0, operators_1.tap)(function (_) { return (_this.isLoggedIn = isLoggedIn); }));
    };
    // Déconnexion
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        (0, core_1.Injectable)({
            providedIn: "root",
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map