import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainCatCardsComponent } from '../../main-cat-cards/main-cat-cards.component';

@Component({
  selector: 'app-randomness-cat-modal',
  templateUrl: './randomness-cat-modal.component.html',
  styleUrls: ['./randomness-cat-modal.component.scss']
})
export class RandomnessCatModalComponent implements OnInit {

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
