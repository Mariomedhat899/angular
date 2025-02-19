import { Routes } from '@angular/router';
import { MainlayerComponent } from './core/mainlayer/mainlayer.component';
import { MealdescriptionComponent } from './components/mealdescription/mealdescription.component';

export const routes: Routes = [

    {path:"",component:MainlayerComponent},
    {path:"meal-description/:id",component:MealdescriptionComponent}
];
