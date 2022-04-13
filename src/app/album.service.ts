import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Album } from './album';
import { List } from './list';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private _albums: Album[] = ALBUMS;
  private _albumList: List[] = ALBUM_LISTS;

  // sendCurrentNumberPage = new Subject<number>();

  subjectAlbum: Subject<Album> = new Subject<Album>();

  constructor() {}

  getAllAlbums(): Album[] {
    return this._albums.sort((a, b) => {
      return b.duration - a.duration;
    });
  }
  getAlbum(id: string) {
    return this._albums.find((album) => album.id === id);
  }
  getAlbumList(id: string) {
    return this._albumList.find((list) => list.id === id);
  }

  count(): number {
    return this._albums.length;
  }

  paginate(start: number, end: number): Album[] {
    return this._albums
      .sort((a, b) => {
        return b.duration - a.duration;
      })
      .slice(start, end);
  }

  search(word: string): Album[] {
    return this._albums.filter((album) => album.title.includes(word));
  }

  switchOn(album: Album): void {
    this._albums.forEach((a) => {
      if (a.id === album.id) {
        album.status = 'on';
      } else {
        a.status = 'off';
      }
    });
    this.subjectAlbum.next(album);
  }
  switchOff(album: Album): void {
    this._albums.forEach((a) => {
      a.status = 'off';
    });
  }

  // currentPage(page:number){
  //   return this.sendCurrentNumberPage.next(page);
  // }
}
