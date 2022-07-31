import { CommonModule } from '@angular/common';
import { NgModule }  from '@angular/core';
import { heroComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations:[
        heroComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent

    ],
    imports:[        
        CommonModule
    ]
})
export class HeroesModule{}



