import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        component:LandingPageComponent
    },
    {
        path: 'todos',
        component:TodoListComponent
    }
];
