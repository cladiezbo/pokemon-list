import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionTableComponent } from './modules/transaction-table/transaction-table.component';


const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionTableComponent
  },
  {
    path: '',
    redirectTo: '/transactions',
    pathMatch: 'full'

  },
  {
    path: '**',
    redirectTo: '/transactions',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
