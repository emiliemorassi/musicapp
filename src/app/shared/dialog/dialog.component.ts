import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    console.log(modalData);
  }

  actionFunction() {
    alert('I am a work in progress');
    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
