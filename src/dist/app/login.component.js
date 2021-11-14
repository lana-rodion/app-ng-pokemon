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
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.message = "Vous êtes déconnecté. (pikachu/pikachu)";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth = this.authService;
    };
    // Informe l'utilisateur sur son authentfication.
    LoginComponent.prototype.setMessage = function () {
        this.message = this.authService.isLoggedIn
            ? "Vous êtes connecté."
            : "Identifiant ou mot de passe incorrect.";
    };
    // Connecte l'utilisateur auprès du Guard
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = "Tentative de connexion en cours ...";
        this.authService.login(this.name, this.password).subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Récupère l'URL de redirection depuis le service d'authentification
                // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
                var redirect = _this.authService.redirectUrl
                    ? _this.authService.redirectUrl
                    : "/pokemon/all";
                // Redirige l'utilisateur
                _this.router.navigate([redirect]);
            }
            else {
                _this.password = "";
            }
        });
    };
    // Déconnecte l'utilisateur
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent = __decorate([
        (0, core_1.Component)({
            selector: "login",
            template: "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12 m4 offset-m4\">\n\t\t\t\t<div class=\"card hoverable\">\n\t\t\t\t\t<div class=\"card-content center\">\n\t\t\t\t\t\t<span class=\"card-title\">Page de connexion</span>\n\t\t\t\t\t\t<p><em>{{ message }}</em></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form #loginForm=\"ngForm\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"name\" [(ngModel)]=\"name\" name=\"name\" required />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t\t<input type=\"password\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" required />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<div class=\"card-action center\">\n\t\t\t\t\t\t<a (click)=\"login()\" class=\"waves-effect waves-light btn\" *ngIf=\"!auth.isLoggedIn\">\n\t\t\t\t\t\t\tSe connecter\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a (click)=\"logout()\" *ngIf=\"auth.isLoggedIn\">Se d\u00E9connecter</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ['form {padding: 1.5rem;}']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map