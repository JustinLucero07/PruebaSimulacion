import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { OperacionesComponentComponent } from './components/operaciones-component/operaciones-component.component';
export const routes: Routes = [
    {
        path: 'components/home-component',
        component: HomeComponentComponent
    },
    {
        path: 'components/operaciones-component',
        component:OperacionesComponentComponent
    }
];
