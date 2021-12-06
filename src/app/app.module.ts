import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsTableComponent } from './modules/pokemons-table/pokemons-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxPokemonsModule } from './core/ngrx/ngrx-pokemon';
import { CommonModule } from '@angular/common';


const nonProductionModules = [];
if (!environment.production) {
  nonProductionModules.push(
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  );
}
@NgModule({
  declarations: [
    AppComponent,
    PokemonsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    NgrxPokemonsModule,
    CommonModule,
    NgrxPokemonsModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    nonProductionModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
