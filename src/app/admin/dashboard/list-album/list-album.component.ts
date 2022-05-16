import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Album } from 'src/app/shared/classes/album';
import { AlbumService } from 'src/app/shared/services/album.service';
import { AlertDialogComponent } from '../../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.scss'],
})
export class ListAlbumComponent implements OnInit {
  public albums: Album[] = [];

  constructor(private albumService: AlbumService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.albumService.getAllAlbumsById().subscribe((albums: Album[]) => {
      this.albums = albums;
    });
  }

  deleteAlbum(album: Album): void {
    if (album) {
      this.albumService.deleteAlbum(album);

      this.albumService.getAllAlbumsById().subscribe((albums: Album[]) => {
        this.albums = albums;
      });
    }
  }
}
