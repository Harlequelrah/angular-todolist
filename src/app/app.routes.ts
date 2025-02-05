import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/components/about-page.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { RegistrationPageComponent } from './auth/components/registration-page/registration-page.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'accueil',
        component: LandingPageComponent
    },


    {
        path: 'register',
        component: RegistrationPageComponent
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
