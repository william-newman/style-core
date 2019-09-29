import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontsComponent } from './main/examples/fonts/fonts.component';
import { BackgroundsComponent } from './main/examples/backgrounds/backgrounds.component';
import { PreloadersComponent } from './main/examples/preloaders/preloaders.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsComponent,
    BackgroundsComponent,
    PreloadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
