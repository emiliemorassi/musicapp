import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';
import { List } from 'src/app/list';
import { ALBUM_LISTS } from 'src/app/mock-albums';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss'],
})
export class AlbumsDetailsComponent implements OnInit {
  defaultImage: string = './assets/images/default_image.png';

  @Input() album: Album = new Album();
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  albumLists: List[] = ALBUM_LISTS;
  list: List | undefined;
  songs: Array<string> | undefined = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}

  clickPlay(album: Album) {
    this.onPlay.emit(album);
  }

  ngOnChanges() {
    if (this.album) {
      this.list = this.albumService.getAlbumList(this.album.ref);
      this.songs = this.albumLists.find(
        (elem) => elem.id === this.album.id
      )?.list;
    }
  }
}
