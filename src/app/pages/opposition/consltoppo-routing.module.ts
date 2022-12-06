import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsltoppoComponent } from './consltoppo/consltoppo.component';
import { OppositionRhComponent } from './opposition-rh/opposition-rh.component';



const routes: Routes = [
    {
        path: 'consltoppo',
        component: ConsltoppoComponent
    },
    {
        path: 'consltoppoRh',
        component: OppositionRhComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsltoppoRoutingModule {

    
}
