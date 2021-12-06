import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsTableComponent } from './modules/pokemons-table/pokemons-table.component';


const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonsTableComponent
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'

  },
  {
    path: '**',
    redirectTo: '/pokemons',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
