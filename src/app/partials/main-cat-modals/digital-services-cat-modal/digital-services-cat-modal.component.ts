import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MainCatCardsComponent} from '../../main-cat-cards/main-cat-cards.component';

@Component({
  selector: 'app-digital-services-cat-modal',
  templateUrl: './digital-services-cat-modal.component.html',
  styleUrls: ['./digital-services-cat-modal.component.scss']
})
export class DigitalServicesCatModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MainCatCardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
