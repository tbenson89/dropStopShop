import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClimbingCatModalComponent } from '../main-cat-modals/climbing-cat-modal/climbing-cat-modal.component';
import { AutomotiveCatModalComponent } from '../main-cat-modals/automotive-cat-modal/automotive-cat-modal.component';
import { SwimmingCatModalComponent } from '../main-cat-modals/swimming-cat-modal/swimming-cat-modal.component';
import { CampingCatModalComponent } from '../main-cat-modals/camping-cat-modal/camping-cat-modal.component';
import { ThirftShopCatModalComponent } from '../main-cat-modals/thirft-shop-cat-modal/thirft-shop-cat-modal.component';
import { AntiqueJunkCatModalComponent } from '../main-cat-modals/antique-junk-cat-modal/antique-junk-cat-modal.component';
import { DigitalServicesCatModalComponent } from '../main-cat-modals/digital-services-cat-modal/digital-services-cat-modal.component';
import { RandomnessCatModalComponent } from '../main-cat-modals/randomness-cat-modal/randomness-cat-modal.component';

@Component({
  selector: 'app-main-cat-cards',
  templateUrl: './main-cat-cards.component.html',
  styleUrls: ['./main-cat-cards.component.scss']
})
export class MainCatCardsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /* Sub Category Modal Views */

  /*SUBCAT - Climbing Gear Modal*/
  showClimbSubCatModal(): void {
    const dialogRef = this.dialog.open(ClimbingCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Automotive Gear Modal*/
  showAutomotiveSubCatModal(): void {
    const dialogRef = this.dialog.open(AutomotiveCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Swimming Gear Modal*/
  showSwimmingSubCatModal(): void {
    const dialogRef = this.dialog.open(SwimmingCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Camping Gear Modal*/
  showCampingSubCatModal(): void {
    const dialogRef = this.dialog.open(CampingCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - ThriftShop Shop Modal*/
  showThriftSubCatModal(): void {
    const dialogRef = this.dialog.open(ThirftShopCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Antique Junk Modal*/
  showAntiqueSubCatModal(): void {
    const dialogRef = this.dialog.open(AntiqueJunkCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Digital Services Modal*/
  showDigitalServicesSubCatModal(): void {
    const dialogRef = this.dialog.open(DigitalServicesCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Randomness Modal*/
  showRandomnessSubCatModal(): void {
    const dialogRef = this.dialog.open(RandomnessCatModalComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
