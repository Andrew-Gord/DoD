import { Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { FirstpageComponent } from './Pages/firstpage/firstpage.component';
import { PriorComponent } from './Pages/prior/prior.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'first',
        component:FirstpageComponent
    },
    {
        path:'prior',
        component:PriorComponent
    }
];
