import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAlbumComponent } from './dashboard/add-album/add-album.component';
import { NotFoundComponent } from '../shared/notfound/notfound.component';
import { ListAlbumComponent } from './dashboard/list-album/list-album.component';
import { EditAlbumComponent } from './dashboard/edit-album/edit-album.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AddAlbumComponent,
    ListAlbumComponent,
    EditAlbumComponent,
    AlertDialogComponent,
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
          {
            path: 'edit/:id',
            component: EditAlbumComponent,
          },
        ],
      },
      { path: '**', component: NotFoundComponent },
    ]),
    MatDialogModule,
  ],
  exports: [LoginComponent, DashboardComponent],
})
export class AdminModule {}
