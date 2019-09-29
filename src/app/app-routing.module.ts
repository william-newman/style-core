import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontsComponent } from './main/examples/fonts/fonts.component';
import { BackgroundsComponent } from './main/examples/backgrounds/backgrounds.component';
import { PreloadersComponent } from './main/examples/preloaders/preloaders.component';

const routes: Routes = [
  { path: 'fonts', component: FontsComponent },
  { path: 'backgrounds', component: BackgroundsComponent },
  { path: 'preloaders', component: PreloadersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
