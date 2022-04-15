import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from 'src/app/shared/services/album.service';

import { Album } from '../../../shared/classes/album';

import { List } from '../../../shared/classes/list';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss'],
})
export class AlbumsDetailsComponent implements OnInit {
  defaultImage: string = './assets/images/default_image.png';

  @Input() album: Album = new Album();
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  // albumLists: List[] = ALBUM_LISTS;
  list: List | undefined;
  songs: List | undefined;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    // if (this.album) {
    //   this.list = this.albumService.getAlbumList(this.album.ref);
    //   this.songs = this.albumLists.find(
    //     (elem) => elem.id === this.album.id
    //   )?.list;
    // }

    if (this.album) {
      this.albumService
        .getAlbumList(this.album.id)
        .subscribe((songs: List | undefined) => (this.songs = songs));
    }
  }

  clickPlay(album: Album) {
    this.onPlay.emit(album);
  }
}
