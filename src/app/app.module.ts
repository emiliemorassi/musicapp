import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums/albums-details/albums-details.component';
import { SearchComponent } from './albums/search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumsDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    LoginComponent,
    NotfoundComponent,
    PaginateComponent,
    AudioPlayerComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAURadRzhggNuksmAilZVRSVSBchbkN4pE',
      authDomain: 'music-f6cb1.firebaseapp.com',
      projectId: 'music-f6cb1',
      storageBucket: 'music-f6cb1.appspot.com',
      messagingSenderId: '909303268668',
      appId: '1:909303268668:web:8dc1487814755278384a39',
    }),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
