import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlbumService } from './album.service';
import { Router, RouterModule } from '@angular/router';

describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('AlbumService::getAlbum', () => {
    service.getAlbum('1').subscribe((album:any) => {
      expect(album.title).toBe("Titre1")
    });
    let req = httpMock.expectOne(
      'https://music-f6cb1-default-rtdb.europe-west1.firebasedatabase.app/albums/1/.json'
    );
    expect(req.request.method).toBe('GET');
    req.flush({ title : "Titre1"});
  });
});
