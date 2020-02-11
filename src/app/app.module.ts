import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadersComponent } from './main/types/preloaders/preloaders.component';
import { FontStylesComponent } from './main/types/font-styles/font-styles.component';
import { FontColorsComponent } from './main/types/font-colors/font-colors.component';
import { HomeComponent } from './main/home/home.component';
import { PalettesComponent } from './main/types/palettes/palettes.component';
import { Animations1Component } from './main/types/animations1/animations1.component';
import { ThemesComponent } from './main/types/themes/themes.component';
import { BatchatComponent } from './main/types/themes/batchat/batchat.component';
import { BatGroundComponent } from './main/types/themes/batchat/bat-ground/bat-ground.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloadersComponent,
    FontStylesComponent,
    FontColorsComponent,
    HomeComponent,
    PalettesComponent,
    Animations1Component,
    ThemesComponent,
    BatchatComponent,
    BatGroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
