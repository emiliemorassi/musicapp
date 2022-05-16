import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/shared/services/album.service';

import { Album } from '../../shared/classes/album';

import { ALBUMS } from '../../shared/mocks/mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principale Albums Music';
  // albums: Album[] = ALBUMS;
  albums: Album[] = [];
  selectedAlbum: Album = new Album();
  playingAlbum: string = '';
  status: string = '';
  count: any;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.paginate(0, 5).subscribe((albums) => {
      this.albums = albums;
    });
    this.count = this.albumService
      .count()
      .subscribe((count) => (this.count = count));
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
    // console.log(this.selectedAlbum);
  }

  playParent($event: Album) {
    this.status = $event.id;
    this.albumService.switchOn($event);
  }

  search($event: any) {
    if ($event) {
      this.albums = $event;
    }
  }

  paginate(album: { start: number; end: number }) {
    this.albumService
      .paginate(album.start, album.end)
      .subscribe((albums) => (this.albums = albums));
  }
}
