"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var core_1 = require("@angular/core");
if (!/localhost/.test(document.location.host)) {
    (0, core_1.enableProdMode)();
}
(0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map