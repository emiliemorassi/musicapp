import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbumComponent } from './add-album.component';

xdescribe('AddAlbumComponent', () => {
  let component: AddAlbumComponent;
  let fixture: ComponentFixture<AddAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAlbumComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should validate input', () => {
  //   let name: string = 'momo';
  //   let errorName: string = 'meeeep error';
  //   component.validInput(name, errorName);
  //   expect(component.validInput).toBeTruthy;
  // });
});
