import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { AlbumsComponent } from './albums/albums.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { SearchComponent } from './albums/search/search.component';
import { AlbumsDetailsComponent } from './albums/albums-details/albums-details.component';
import { SharedModule } from '../shared/shared.module';
import { PaginateComponent } from './paginate/paginate.component';
import { NotFoundComponent } from '../shared/notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AlbumDescriptionComponent,
    AlbumsComponent,
    AudioPlayerComponent,
    SearchComponent,
    AlbumsDetailsComponent,
    PaginateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AlbumsComponent },
      { path: 'album/:id', component: AlbumDescriptionComponent },
    ]),
  ],
  exports: [
    AlbumDescriptionComponent,
    AlbumsComponent,
    AudioPlayerComponent,
    SearchComponent,
    AlbumsDetailsComponent,
    PaginateComponent,
  ],
})
export class AlbumModule {}
