import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { LandingMainCatsComponent } from './partials/landing-main-cats/landing-main-cats.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MainFooterComponent } from './partials/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingMainCatsComponent,
    MainFooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
