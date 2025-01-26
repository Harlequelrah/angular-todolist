import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        component:LoginPageComponent
    },
    {
        path: 'todos',
        component:TodoListComponent
    }
];
