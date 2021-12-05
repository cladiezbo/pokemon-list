import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TransactionsEffects, TransactionsFacade, transactionsReducer } from './+transactions';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('transactions', transactionsReducer),
    EffectsModule.forFeature([
      TransactionsEffects
    ])
  ],
})
export class NgrxTransactionsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgrxTransactionsModule,
      providers: [ TransactionsFacade ]
    };
  }
}
