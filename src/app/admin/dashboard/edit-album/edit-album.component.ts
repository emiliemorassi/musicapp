import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/shared/classes/album';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AlbumService } from 'src/app/shared/services/album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss'],
})
export class EditAlbumComponent implements OnInit {
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
  public album: Album | undefined;
  public id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private albumService: AlbumService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    //Recupération de l'id de l'album à modifier et initialisation du formulaire
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.albumService.getAlbum(this.id).subscribe((response) => {
        this.album = response;
        this.initForm();
      });
    });
  }

  //Initialisation du formulaire
  public initForm() {
    if (this.album) {
      this.albumForm.controls['ref'].patchValue(this.album.ref);
      this.albumForm.controls['name'].patchValue(this.album.name);
      this.albumForm.controls['title'].patchValue(this.album.title);
      this.albumForm.controls['description'].patchValue(this.album.description);
      this.albumForm.controls['duration'].patchValue(this.album.duration);
      this.albumForm.controls['url'].patchValue(this.album.url);
      this.albumForm.controls['like'].patchValue(this.album.like);
      this.albumForm.controls['tags'].patchValue(this.album.tags?.toString());
    }
  }

  //Controle des valeurs du formulaire
  public validInput(name: string, errorName: string) {
    return (
      (this.albumForm.get(name)?.dirty && //
        this.albumForm.get(name)?.hasError(errorName)) ||
      (this.albumForm.get(name)?.touched &&
        this.albumForm.get(name)?.hasError(errorName))
    );
  }

  //Modification des valeurs en base de données
  public submit() {
    this.albumService.editAlbum({
      ...this.albumForm.value,
      tags: this.albumForm.value.tags.split(','),
      status: 'off',
      id: this.id,
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'dialog-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      message: "Etes-vous sûr de vouloir modifier l'album?",
      buttonText: {
        back: 'Non',
        close: 'Oui',
      },
    };
    const modalDialog = this.matDialog.open(DialogComponent, dialogConfig);
  }
}
