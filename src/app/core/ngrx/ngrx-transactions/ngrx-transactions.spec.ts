import { async, TestBed } from '@angular/core/testing';
import { NgrxTransactionsModule } from './ngrx-transactions.module';

describe('NgrxTransactionsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgrxTransactionsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgrxTransactionsModule).toBeDefined();
  });
});
