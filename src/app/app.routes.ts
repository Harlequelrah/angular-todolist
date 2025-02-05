import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/components/about-page.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';

export const routes: Routes = [


    {
        path: 'accueil',
        component: LandingPageComponent
    },

    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'todos',
        loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
    },

    {
        path: '**',
        component: NotfoundComponent
    }
];
