import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainCatCardsComponent } from '../../main-cat-cards/main-cat-cards.component';

@Component({
  selector: 'app-climbing-cat-modal',
  templateUrl: './climbing-cat-modal.component.html',
  styleUrls: ['./climbing-cat-modal.component.scss']
})
export class ClimbingCatModalComponent implements OnInit {

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
