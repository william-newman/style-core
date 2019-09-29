import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontStylesComponent } from './main/types/font-styles/font-styles.component';
import { FontColorsComponent } from './main/types/font-colors/font-colors.component';
import { PreloadersComponent } from './main/types/preloaders/preloaders.component';
import { HomeComponent } from './main/home/home.component';
import { PalettesComponent } from './main/types/palettes/palettes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
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
