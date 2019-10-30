import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontStylesComponent } from './main/types/font-styles/font-styles.component';
import { FontColorsComponent } from './main/types/font-colors/font-colors.component';
import { PreloadersComponent } from './main/types/preloaders/preloaders.component';
import { HomeComponent } from './main/home/home.component';
import { PalettesComponent } from './main/types/palettes/palettes.component';
import { Animations1Component } from './main/types/animations1/animations1.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'animations1', component: Animations1Component },
  { path: 'font-colors', component: FontColorsComponent },
  { path: 'font-styles', component: FontStylesComponent },
  { path: 'palettes', component: PalettesComponent },
  { path: 'preloaders', component: PreloadersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
