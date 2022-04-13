import { Component, OnInit } from '@angular/core';

import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principale Albums Music';
  albums: Album[] = ALBUMS;
  selectedAlbum: Album = new Album();
  playingAlbum: string = '';
  status: string = '';

  constructor(private albumService: AlbumService) {
    // this.albumService.getAllAlbums();
    console.log(this.albumService.count());
  }

  ngOnInit(): void {
    this.albums = this.albumService.paginate(0, 5);
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }

  // playParent(album: Album): void {
  //   this.playingAlbum = album.id;
  // }
  playParent($event: Album) {
    this.status = $event.id;
    console.log($event);
    // console.log($event.id);
    this.albumService.switchOn($event);
  }

  search($event: any) {
    if ($event) {
      this.albums = $event;
    }
  }

  paginate(album: { start: number; end: number }) {
    this.albums = this.albumService.paginate(album.start, album.end);
  }
}
