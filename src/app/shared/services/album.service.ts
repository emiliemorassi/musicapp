import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

import { DataInterface } from '../interfaces/data.interface';
import { Album } from '../classes/album';
import { List } from '../classes/list';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  sendCurrentNumberPage = new Subject<number>();
  subjectAlbum: Subject<Album> = new Subject<Album>();

  private albumsUrl =
    'https://music-f6cb1-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private http: HttpClient) {}

  getAllAlbums(): Observable<Album[]> {
    return this.http
      .get<Album[]>(this.albumsUrl + '/albums/.json', this.httpOptions)
      .pipe(
        map((albums) => {
          return this.transformId(albums).sort((a, b) => {
            return b.duration - a.duration;
          });
        })
      );
  }

  //change to byDate
  getAllAlbumsById(): Observable<Album[]> {
    return this.http
      .get<Album[]>(this.albumsUrl + '/albums/.json', this.httpOptions)
      .pipe(
        map((albums) => {
          return this.transformId(albums).sort((a, b) => {
            return a.id - b.id;
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
      .pipe(map((albums) => this.transformId(albums).length));
  }

  paginate(start: number, end: number): Observable<Album[]> {
    return this.http
      .get<DataInterface>(this.albumsUrl + '/.json', this.httpOptions)
      .pipe(
        map((data) => {
          return this.transformId(data.albums)
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
        this.transformId(albums).forEach((v: Album, k: any) => {
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

  transformId(album: any) {
    return Object.entries(album).map((a: any) => {
      return { ...a[1], id: a[0] };
    });
  }

  addAlbum(album: Album): void {
    this.http.post<Album>(this.albumsUrl + '/albums/.json', album).subscribe({
      next: (data) => {
        // console.log('yeah!');
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  editAlbum(album: Album) {
    this.http
      .put<Album>(this.albumsUrl + `/albums/${album.id}.json`, album)
      .subscribe({
        next: (data) => {
          console.log('update successful');
        },
        error: (error) => {
          console.log('error update', error);
          //gestion de l'erreur (dialog?)
        },
      });
  }

  deleteAlbum(album: Album): void {
    this.http
      .delete<Album>(this.albumsUrl + `/albums/${album.id}.json`)
      .subscribe({
        next: (data) => {
          // console.log('deletion successful');
        },
        error: (error) => {
          console.log('error deletion', error);
          //gestion de l'erreur (dialog?)
        },
      });
  }
}
