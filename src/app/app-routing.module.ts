import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';


const routes: Routes = [
    {
        path: '',//VER
        component: PorPaisComponent, //para poder usarlo tiene que estar impportado en el app.module y exportado en el modulo paises
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', //los dos puntos son para que reciba el codigo del pais como parametro
        component: VerPaisComponent
    },
    {
        path:'**', //significa cualquier otro path que no este identificado.
        redirectTo: ''
    }
];

@NgModule({
    
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule {} 