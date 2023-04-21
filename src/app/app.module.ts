import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StarsComponent } from './components/stars/stars.component';
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    LayoutComponent,
    StarsComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
