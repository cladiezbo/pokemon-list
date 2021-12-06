import { async, TestBed } from '@angular/core/testing';
import { NgrxPokemonsModule } from './ngrx-pokemons.module';

describe('NgrxPokemonsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgrxPokemonsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgrxPokemonsModule).toBeDefined();
  });
});
