import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

// Par defaut, le Router d'application n'a pas des routes jusqu'à on le configure
// path: '**' pour intercepter toutes les routes non prise en charge par l'application 
// et les envoyer vers PageNotFoundComponent

const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }