import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
