import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/core/interfaces/ngrx/transaction';
import { TransactionsFacade } from 'src/app/core/ngrx/ngrx-transactions';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  /**
   * Transaction list
   *
   */
  transactionsData: PokemonData[];

  /**
   * List of columns names to show in template
   *
   */
  displayedColumns = ['name'];

  constructor(public transactionsFacade: TransactionsFacade) { }

  ngOnInit() {
    this.transactionsFacade.loadPokemonNames(1);
  }

  applyFilter(description: string) {
  }

}
