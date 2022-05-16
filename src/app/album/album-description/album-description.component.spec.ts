import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/shared/classes/album';
import { AlbumService } from 'src/app/shared/services/album.service';

import { AlbumDescriptionComponent } from './album-description.component';

describe('AlbumDescriptionComponent', () => {
  let component: AlbumDescriptionComponent;
  let fixture: ComponentFixture<AlbumDescriptionComponent>;
  let aRout: any;
  let albumService: jasmine.Spy<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => {
                  return '1';
                },
              },
              url: '/',
            },
          },
        },
      ],
      declarations: [AlbumDescriptionComponent],
    }).compileComponents();

    aRout = spyOn(TestBed.inject(ActivatedRoute).snapshot.paramMap, 'get');
    albumService = spyOn(TestBed.inject(AlbumService), 'getAlbum');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AlbumDescriptionComponent::create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ActivatedRoute', () => {
    expect(aRout).toHaveBeenCalled();
  });
});
