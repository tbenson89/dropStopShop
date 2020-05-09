import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguCarouselModule } from '@ngu/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MainCatCardsComponent } from './partials/main-cat-cards/main-cat-cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MainFooterComponent } from './partials/global/main-footer/main-footer.component';
import { MainHeaderComponent } from './partials/global/main-header/main-header.component';
import { MainMenuComponent } from './partials/global/main-menu/main-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClimbingCatModalComponent } from './partials/main-cat-modals/climbing-cat-modal/climbing-cat-modal.component';
import { AutomotiveCatModalComponent } from './partials/main-cat-modals/automotive-cat-modal/automotive-cat-modal.component';
import { SwimmingCatModalComponent } from './partials/main-cat-modals/swimming-cat-modal/swimming-cat-modal.component';
import { CampingCatModalComponent } from './partials/main-cat-modals/camping-cat-modal/camping-cat-modal.component';
import { ThirftShopCatModalComponent } from './partials/main-cat-modals/thirft-shop-cat-modal/thirft-shop-cat-modal.component';
import { AntiqueJunkCatModalComponent } from './partials/main-cat-modals/antique-junk-cat-modal/antique-junk-cat-modal.component';
import { DigitalServicesCatModalComponent } from './partials/main-cat-modals/digital-services-cat-modal/digital-services-cat-modal.component';
import { RandomnessCatModalComponent } from './partials/main-cat-modals/randomness-cat-modal/randomness-cat-modal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { TesterArenaComponent } from './gage/tester-arena/tester-arena.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselTestComponent } from './partials/main-cat-modals/climbing-cat-modal/carousel-test/carousel-test.component';
import { MainCarouselConfigComponent } from './partials/global/main-carousel-config/main-carousel-config.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCatCardsComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainMenuComponent,
    ClimbingCatModalComponent,
    AutomotiveCatModalComponent,
    SwimmingCatModalComponent,
    CampingCatModalComponent,
    ThirftShopCatModalComponent,
    AntiqueJunkCatModalComponent,
    DigitalServicesCatModalComponent,
    RandomnessCatModalComponent,
    TesterArenaComponent,
    CarouselTestComponent,
    MainCarouselConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NguCarouselModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
