import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[ //Son un array que nos dice que contiene este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Cosas que deseamos hacer publicas o visibles fuera de este modulo
        ListadoComponent
    ],
    imports: [ //Aqui van todos los modulos que deseamos importar 
        CommonModule
    ]

})
export class HeroeModule{}