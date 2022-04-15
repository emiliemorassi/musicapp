import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAlbumComponent } from './dashboard/add-album/add-album.component';
import { NotFoundComponent } from '../shared/notfound/notfound.component';
import { ListAlbumComponent } from './dashboard/list-album/list-album.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AddAlbumComponent,
    ListAlbumComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'add',
            component: AddAlbumComponent,
          },
          {
            path: 'listalbums',
            component: ListAlbumComponent,
          },
        ],
      },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  exports: [LoginComponent, DashboardComponent],
})
export class AdminModule {}
