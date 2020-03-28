import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MainCatCardsComponent} from '../../main-cat-cards/main-cat-cards.component';

@Component({
  selector: 'app-camping-cat-modal',
  templateUrl: './camping-cat-modal.component.html',
  styleUrls: ['./camping-cat-modal.component.scss']
})
export class CampingCatModalComponent implements OnInit {

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
