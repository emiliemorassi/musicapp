import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDetailsComponent } from './albums-details.component';

xdescribe('AlbumsDetailsComponent', () => {
  let component: AlbumsDetailsComponent;
  let fixture: ComponentFixture<AlbumsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumsDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
