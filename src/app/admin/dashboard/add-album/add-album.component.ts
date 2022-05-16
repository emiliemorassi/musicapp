import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/shared/services/album.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})
export class AddAlbumComponent implements OnInit {
  public albumForm: FormGroup = this.formBuilder.group({
    ref: [null, Validators.required],
    name: [
      null,
      Validators.compose([Validators.minLength(2), Validators.required]),
    ],
    title: [null, Validators.required],
    description: [null, Validators.required],
    duration: [null, Validators.required],
    url: [null, Validators.required],
    like: [null, Validators.required],
    tags: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private albumService: AlbumService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validInput(name: string, errorName: string) {
    return (
      (this.albumForm.get(name)?.dirty && //
        this.albumForm.get(name)?.hasError(errorName)) ||
      (this.albumForm.get(name)?.touched &&
        this.albumForm.get(name)?.hasError(errorName))
    );
  }

  openAlertDialog() {
    const dialogConfig = new MatDialogConfig();
    //User won't be able to close the dialog just by clicking ouside of it
    dialogConfig.disableClose = true;
    //Autofocus set automatically on the first form field in the dialog
    dialogConfig.autoFocus = true;
    //Shadow backdrop that blocks the user from clicking on the rest of the UI.
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      message: "L'album a bien été ajouté",
      buttonText: {
        close: "J'ai compris",
      },
    };

    const dialogRef = this.dialog.open(AlertDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      console.log('popup closed');
      this.router.navigate(['/listalbums']);
    });
  }

  submit() {
    this.albumService.addAlbum({
      ...this.albumForm.value,
      tags: this.albumForm.value.tags.split(','),
      status: 'off',
      id: '1',
    });
  }
}
