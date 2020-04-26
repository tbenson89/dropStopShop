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
  dialogWidth: any;
  mainCatCardContent: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialogWidth = '80%';

    this.mainCatCardContent = {
      mainCatCardImg: {
        climbing: '../../../assets/images/climbing/andrew-neel-unsplash-climbingGear.JPG',
        automotive: '../../../assets/images/automotive/automotive-gear-snailInstall-slmodd.png',
        swimming: '../../../assets/images/swimming/seanTookThese-unsplash.JPG',
        camping: '../../../assets/images/camping/adrian-unsplash.jpg',
        thrift: 'Thrift Shop',
        antique: 'Antiques & Junk',
        digiServices: 'Digital Services',
        random: 'Randomness'
      },
      mainCatCardTitle: {
        climbing: 'Climbing Gear',
        automotive: 'Automotive Gear',
        swimming: 'Swimming Gear',
        camping: 'Camping Gear',
        thrift: 'Thrift Shop',
        antique: 'Antiques & Junk',
        digiServices: 'Digital Services',
        random: 'Randomness'
      },
      mainCatCardSubCats: {
        climbing: [
          'Climbing Shoes',
          'Climbing Chalks',
          'Climbing Accessories'
        ],
        automotive: [
          'T-Shirts and Apparel',
          'Goodiez and Lootz',
          'Modified Accessories'
        ],
        swimming: [
          'Women\'s Swimming Gear',
          'Men\'s Swimming Gear',
          'Swimming Accessories'
        ],
        camping: [
          'Tents and Packing',
          'Lounge and Comfort',
          'Randoms and Goodiez'
        ],
        thrift: [
          'Modified Goodiez',
          'Artistry Crafts',
          'Restoration Finish'
        ],
        antique: [
          'Treasures and Gems',
          'Junk Drawer Fun',
          'Barn Finds'
        ],
        digiServices: [
          'Websites & Applications',
          'Inventory Management',
          'Hosting & Server Admin'
        ],
        random: [
          'Random Deals',
          'Shuffle Bin',
          'Other Goodz'
        ]
      }
    };
  }

  /* Sub Category Modal Views */
  /*SUBCAT - Climbing Gear Modal*/
  showClimbSubCatModal(): void {
    const dialogRef = this.dialog.open(ClimbingCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Automotive Gear Modal*/
  showAutomotiveSubCatModal(): void {
    const dialogRef = this.dialog.open(AutomotiveCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Swimming Gear Modal*/
  showSwimmingSubCatModal(): void {
    const dialogRef = this.dialog.open(SwimmingCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Camping Gear Modal*/
  showCampingSubCatModal(): void {
    const dialogRef = this.dialog.open(CampingCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - ThriftShop Shop Modal*/
  showThriftSubCatModal(): void {
    const dialogRef = this.dialog.open(ThirftShopCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Antique Junk Modal*/
  showAntiqueSubCatModal(): void {
    const dialogRef = this.dialog.open(AntiqueJunkCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Digital Services Modal*/
  showDigitalServicesSubCatModal(): void {
    const dialogRef = this.dialog.open(DigitalServicesCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*SUBCAT - Randomness Modal*/
  showRandomnessSubCatModal(): void {
    const dialogRef = this.dialog.open(RandomnessCatModalComponent, {
      width: this.dialogWidth
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
