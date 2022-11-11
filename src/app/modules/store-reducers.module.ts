import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LoginReducer, loginFeatureKey } from '../reducers/login.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(loginFeatureKey, LoginReducer)
  ]
})
export class StoreReducersModule { }
