import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AlbumModule } from './album/album.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    AlbumModule,
    AdminModule,
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
