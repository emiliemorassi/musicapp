import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { DataInterface } from '../interfaces/data.interface';
import { Album } from '../classes/album';
import { List } from '../classes/list';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  sendCurrentNumberPage = new Subject<number>();
  subjectAlbum: Subject<Album> = new Subject<Album>();

  private albumsUrl =
    'https://music-f6cb1-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  getAllAlbums(): Observable<Album[]> {
    return this.http
      .get<Album[]>(this.albumsUrl + '/albums/.json', httpOptions)
      .pipe(
        map((albums) => {
          return albums.sort((a, b) => {
            return b.duration - a.duration;
          });
        })
      );
  }

  getAlbum(id: string): Observable<Album | undefined> {
    return this.http.get<Album>(this.albumsUrl + `/albums/${id}/.json`);
  }

  getAlbumList(id: string): Observable<List | undefined> {
    return this.http.get<List>(this.albumsUrl + `/albumLists/${id}/.json`);
  }

  count(): Observable<number> {
    return this.http
      .get<Album[]>(this.albumsUrl + 'albums/.json')
      .pipe(map((albums) => albums.length));
  }

  paginate(start: number, end: number): Observable<Album[]> {
    return this.http
      .get<DataInterface>(this.albumsUrl + '/.json', httpOptions)
      .pipe(
        map((data) => {
          return data.albums
            .sort((a, b) => {
              return b.duration - a.duration;
            })
            .slice(start, end);
        })
      );
  }

  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl + `albums/.json`).pipe(
      map((albums) => {
        let search: Album[] = [];
        let re = new RegExp('^' + word.trim());
        albums.forEach((v: Album, k: any) => {
          v.id = k;
          if (v.title.match(re) != null) {
            search.push(v);
          }
        });
        return search;
      })
    );
  }

  switchOn(album: Album): void {
    album.status = 'on';
    this.http
      .put<void>(this.albumsUrl + `/albums/${album.id}/.json`, album)
      .subscribe(() => {
        this.subjectAlbum.next(album);
      });
  }

  switchOff(album: Album): void {
    album.status = 'off';
    this.http
      .put<void>(this.albumsUrl + `/albums/${album.id}/.json`, album)
      .subscribe(() => {});
  }
}
