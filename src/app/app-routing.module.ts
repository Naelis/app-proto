import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {SearchbarComponent} from './searchbar/searchbar.component';
import {MenuComponent} from './menu/menu.component';
import {ResultsComponent} from './results/results.component';

const routes: Routes = [
    {
      path: '',
        pathMatch: 'full',
        redirectTo: 'menu'
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
      path: 'events',
        component: EventsComponent
    },
    {
        path: 'results',
        redirectTo: 'events'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
