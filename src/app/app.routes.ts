import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { RegistrationPageComponent } from './auth/components/registration-page/registration-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleTodoComponent } from './todos/components/single-todo/single-todo.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';

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
        path: 'todos/:id',
        component: SingleTodoComponent
    },
    {
        path: 'todos',
        component: TodoListComponent
    },

    {
        path: 'register',
        component:RegistrationPageComponent
    },
    {
        path: 'about',
        component:AboutPageComponent
    }
];
