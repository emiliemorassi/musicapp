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
  // albums: Album[] = ALBUMS;
  albums: Album[] = [];
  selectedAlbum: Album = new Album();
  playingAlbum: string = '';
  status: string = '';
  count: any;

  constructor(private albumService: AlbumService) {
    // this.albumService.getAllAlbums();
    // console.log(this.albumService.count());
    // console.log(
    //   this.albumService
    //     .getAllAlbums()
    //     .subscribe((albums) => console.log('-*-*-*-*---*', albums))
    // );
  }

  ngOnInit(): void {
    // this.albums = this.albumService.paginate(0, 5);
    this.albumService.paginate(0, 5).subscribe((albums) => {
      console.log(albums);

      this.albums = albums;
    });
    this.count = this.albumService
      .count()
      .subscribe((count) => (this.count = count));
    console.log(this.count);
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

  // paginate(album: { start: number; end: number }) {
  //   this.albums = this.albumService.paginate(album.start, album.end);
  // }
  paginate(album: { start: number; end: number }) {
    this.albumService
      .paginate(album.start, album.end)
      .subscribe((albums) => (this.albums = albums));
  }
}
