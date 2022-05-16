import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbumComponent } from './list-album.component';

xdescribe('ListAlbumComponent', () => {
  let component: ListAlbumComponent;
  let fixture: ComponentFixture<ListAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAlbumComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
