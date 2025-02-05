import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/components/about-page.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import { AuthGard } from './core/guards/auth.gards';
const routes: Routes = [

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
        loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule),
        canActivate:[AuthGard]
    },

    {
        path: '**',
        component: NotfoundComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
